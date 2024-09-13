import db from "../../../lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const [rows] = await db.query(
    "select mno, name, id, DATE_FORMAT(regdate, '%Y-%m-%d %h:%i:%s') regdate from MEMBER"
  );
  // const res = NextResponse.json({ no: 1221, name: "테스트111" });
  const res = NextResponse.json(rows);
  return res;
}
