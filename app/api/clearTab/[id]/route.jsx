import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import Table from "../../../../models/table";

export async function PUT(request, { params }) {
  const { id } = params;
  const clearedTab = await request.json();

  await connectMongoDB();

  const table = await Table.findById(id);
  table.tableContent = clearedTab;
  table.usedBy = "";

  table.tableTotal = 0;

  await table.save();

  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}
