import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function POST(req) {
  const post_data = await req.json();
  // Cache-Control 헤더를 통해 캐시 비활성화
  // console.log("=========> post_data ", post_data, post_data.wh_col);

  const TB = post_data.TB;
  const wh_col = post_data.wh_col;
  const wh_then = post_data.wh_then;
  const wh_val = post_data.wh_val;
  const qry =
    "select mdno, md_name,memo,DATE_FORMAT(regdate, '%Y-%m-%d %h:%i:%s') regdate from " +
    TB;
  let add_where = "";
  if (wh_col.length > 0) {
    wh_col.map((v, i) => {
      add_where +=
        (add_where == "" ? " where " : " and ") +
        v +
        " " +
        wh_then[i] +
        " '" +
        wh_val[i] +
        "'";
    });
  }
  // console.log("----------------> add_where", add_where, wh_col.length);

  const [rows] = await db.query(
    "select mdno, md_name,memo,DATE_FORMAT(regdate, '%Y-%m-%d %h:%i:%s') regdate from MEDIA" +
      add_where
  );
  // const res = NextResponse.json({ no: 1221, name: "테스트111" });
  const res = NextResponse.json(rows);
  return res;
}
