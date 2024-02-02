import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import Table from "../../../../models/table";

export async function PUT(request, { params }) {
  const { id } = params;
  const { selectedProduct: tableContent, nameOfUser: usedBy } =
    await request.json();

  await connectMongoDB();

  const table = await Table.findById(id);
  table.tableContent.push(tableContent);
  table.usedBy = usedBy;

  const tableTotal = table.tableContent.reduce(
    (total, product) => total + product.productPrice * product.productAmmount,
    0
  );
  table.tableTotal = tableTotal;

  await table.save();

  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}
