import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import Admin from "../../../models/admin";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { username, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await Admin.create({ username, password: hashedPassword });

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error accured while registering the user." },
      { status: 500 }
    );
  }
}
