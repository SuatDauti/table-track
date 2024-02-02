import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Table from "../../../models/table";

export async function POST(req) {
  try {
    const table = await req.json();

    if (!table) {
      return NextResponse.json(
        { message: "Product is required in the request payload." },
        { status: 400 }
      );
    }

    await connectMongoDB();
    await Table.create(table);

    return NextResponse.json({ message: "product created" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "An error accured while creating the product." + error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDB();
  const table = await Table.find();
  return NextResponse.json({ table });
}

export async function DELETE() {
  await connectMongoDB();
  const lastEntry = await Table.findOne().sort({ _id: -1 });
  await Table.findByIdAndDelete(lastEntry._id);

  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}

export async function PUT(req) {
  try {
    const { id } = req.query; // Extract the table ID from the request query parameters
    const updatedTableData = await req.json(); // Data to update the table

    // Check if the ID is provided
    if (!id) {
      return NextResponse.json(
        { message: "Table ID is required in the request parameters." },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Find the table by ID
    const existingTable = await Table.findById(id);

    // Check if the table exists
    if (!existingTable) {
      return NextResponse.json(
        { message: "Table not found." },
        { status: 404 }
      );
    }

    // Update the table data
    existingTable.usedBy = updatedTableData.usedBy;
    existingTable.tableContent = updatedTableData.tableContent;
    existingTable.tableTotal = calculateTableTotal(
      updatedTableData.tableContent
    );

    // Save the updated table
    await existingTable.save();

    return NextResponse.json({ message: "Table updated" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "An error occurred while updating the table." + error.message,
      },
      { status: 500 }
    );
  }
}

// Helper function to calculate the tableTotal based on tableContent
function calculateTableTotal(tableContent) {
  return tableContent.reduce((total, product) => {
    return total + product.productAmmount * product.productPrice;
  }, 0);
}
