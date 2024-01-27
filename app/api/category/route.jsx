import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import Category from "../../../models/category";

export async function POST(req) {
  try {
    const { category } = await req.json();

    if (!category) {
      return NextResponse.json(
        { message: "Category is required in the request payload." },
        { status: 400 }
      );
    }

    await connectMongoDB();
    await Category.create({ category });

    return NextResponse.json({ message: "category created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error accured while creating the category." },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDB();
  const category = await Category.find();
  return NextResponse.json({ category });
}
