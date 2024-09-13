import db from "../../../lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const v = await req.json();
  const qry =
    "select mno, name, id, DATE_FORMAT(regdate, '%Y-%m-%d %h:%i:%s') regdate from MEMBER where mno=" +
    v.mno;
  const [rows] = await db.query(qry);
  // console.log(rows);
  // return NextResponse.json([1, 2, 3, 4]);
  // return NextResponse.json(v);
  return NextResponse.json(rows);
}
