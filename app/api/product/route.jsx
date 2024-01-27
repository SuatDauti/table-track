import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import Product from "../../../models/product";

export async function POST(req) {
  try {
    const product = await req.json();

    if (!product) {
      return NextResponse.json(
        { message: "Product is required in the request payload." },
        { status: 400 }
      );
    }

    await connectMongoDB();
    await Product.create(product);

    return NextResponse.json({ message: "product created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error accured while creating the product." },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDB();
  const product = await Product.find();
  return NextResponse.json({ product });
}
