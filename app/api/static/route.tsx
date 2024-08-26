import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function GET() {
  const [rows] = await db.query(
    "select mdno, md_name,memo,DATE_FORMAT(regdate, '%Y-%m-%d %h:%i:%s') regdate from MEDIA"
  );
  // const res = NextResponse.json({ no: 1221, name: "테스트111" });
  const res = NextResponse.json(rows);
  return res;
}
