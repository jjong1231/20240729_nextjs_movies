import { NextRequest, NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(req: NextRequest) {
  try {
    // const { table, where } = await req.json();

    const table = "MEDIA";

    const params = ["%이름%"];

    const [rs] = await db.query(
      `SELECT mdno, md_name, memo, DATE_FORMAT(regdate, '%y-%m-%d %T') regdate 
      FROM ${table} 
      WHERE md_name LIKE ?`,
      params
    );

    return NextResponse.json(rs);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
