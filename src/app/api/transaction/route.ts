import { NextRequest, NextResponse } from "next/server";
import pool from "src/lib/db";

export async function POST(req: NextRequest) {
  console.log("POST method running");

  try {
    const { amount, type, category, date, userId } = await req.json();
    console.log("Parsed request body:", {
      amount,
      type,
      category,
      date,
      userId,
    });

    const [result] = await pool.query(
      "INSERT INTO transactions (amount, type, category, date, userId) VALUES (?,?,?,?,?)",
      [amount, type, category, date, userId],
    );
    console.log("Query result:", result);

    return NextResponse.json({ id: (result as any).insertId }, { status: 201 });
  } catch (error) {
    console.error("Error during POST request:", error);
    return NextResponse.json(
      { error: "Failed to create transaction" },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  console.log("GET method running");

  const userId = req.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    const [rows] = await pool.query(
      "SELECT * FROM transactions WHERE userId = ?",
      [userId],
    );
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.error("Error during GET request:", error);
    return NextResponse.json(
      { error: "Failed to fetch transaction" },
      { status: 500 },
    );
  }
}
