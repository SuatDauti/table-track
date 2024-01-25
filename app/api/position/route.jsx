import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import Position from "../../../models/position";

export async function POST(req) {
  try {
    const { position } = await req.json();

    if (!position) {
      return NextResponse.json(
        { message: "Position is required in the request payload." },
        { status: 400 }
      );
    }

    await connectMongoDB();
    await Position.create({ position });

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error accured while registering the user." },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDB();
  const positions = await Position.find();
  return NextResponse.json({ positions });
}
