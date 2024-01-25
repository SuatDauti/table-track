import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import Employee from "../../../models/employee";

export async function POST(req) {
  try {
    console.log("Request Payload:", req.body);

    const { name, LastName, Pin, IsEmployeed, position } = await req.json();

    if (
      !name ||
      !LastName ||
      !Pin ||
      typeof IsEmployeed === "undefined" ||
      !position
    ) {
      return NextResponse.json(
        {
          message:
            "One or more required fields are missing in the request payload.",
        },
        { status: 400 }
      );
    }

    await connectMongoDB();
    console.log("Connected to MongoDB");
    await Employee.create({ name, LastName, Pin, IsEmployeed, position });

    return NextResponse.json({ message: "Staff registered" }, { status: 201 });
  } catch (error) {
    console.error("Error during staff registration:", error);
    return NextResponse.json(
      { message: "An error accured while registering the staff." },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDB();
  const staff = await Employee.find();
  return NextResponse.json({ staff });
}
