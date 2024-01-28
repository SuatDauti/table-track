import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
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
