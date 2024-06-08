import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: NextRequest) {
  console.log("POST method Running");

  try {
    const { email, password, name } = await req.json();
    console.log("Parsed request body", {
      email,
      password,
      name,
    });

    const [result] = await pool.query(
      "INSERT INTO users (email, password, name) VALUES (?,?,?)",
      [email, password, name],
    );
    console.log("Query result:", result);

    return NextResponse.json({ id: (result as any).insertId }, { status: 201 });
  } catch (error) {
    console.error("Error during POST request", error);
    return NextResponse.json(
      { error: "failed to create user" },
      { status: 500 },
    );
  }
}
