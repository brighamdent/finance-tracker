import { NextRequest, NextResponse } from "next/server";
import pool from "src/lib/db";

export async function POST(req: NextRequest) {
  console.log("POST method Running");

  try {
    const { id, email } = await req.json();
    console.log("Parsed request body", {
      id,
      email,
    });

    const [result] = await pool.query(
      "INSERT INTO users (user_id, email) VALUES (?,?)",
      [id, email],
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

export async function GET(req: NextRequest) {
  console.log("GET method running");

  const userId = req.nextUrl.searchParams.get("userId");
  //const { userId } = req.json();
  console.log(userId);
  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE user_id = ?", [
      userId,
    ]);
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.error("Error during GET request:", error);
    return NextResponse.json(
      { error: "Failed to fetch transaction" },
      { status: 500 },
    );
  }
}
