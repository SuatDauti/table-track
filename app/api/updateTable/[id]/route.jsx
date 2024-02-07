import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import Table from "../../../../models/table";

export async function PUT(request, { params }) {
  const { id } = params;
  const { selectedProduct: tableContent, nameOfUser: usedBy } =
    await request.json();

  await connectMongoDB();

  const table = await Table.findById(id);

  // Find the product in the existing table content
  const existingProductIndex = table.tableContent.findIndex(
    (product) => product.productName === tableContent.productName
  );

  // If the product exists, update the productAmmount
  if (existingProductIndex !== -1) {
    table.tableContent[existingProductIndex].productAmmount +=
      tableContent.productAmmount;
  } else {
    // If the product doesn't exist, add it to the table content
    table.tableContent.push(tableContent);
  }

  table.usedBy = usedBy;

  const tableTotal = table.tableContent.reduce(
    (total, product) => total + product.productPrice * product.productAmmount,
    0
  );
  table.tableTotal = tableTotal;
  // Mark the tableContent as modified
  table.markModified("tableContent");

  await table.save();

  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}
