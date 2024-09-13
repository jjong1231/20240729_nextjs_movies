import React from "react";
import db from "../../../lib/db";
import { NextResponse } from "next/server";
// import listRowsStore from "../../stores/global";

export async function POST(req) {
  // const { count } = listRowsStore();
  const v = await req.json();
  const page = v.page ? parseInt(v.page) : 1;
  const keywords = v.keywords ? v.keywords : false;
  // const listRows = parseInt(process.env.listRows);
  const listRows = v.listRows;
  const qry_limit = " limit " + listRows * (page - 1) + ", " + listRows;
  const qry_where = keywords
    ? " where name like '%" + keywords + "%' or id like '%" + keywords + "%'"
    : "";
  const qry_orderby = " order by mno desc";
  const rs1 = db.query(
    "select mno, id, name, DATE_FORMAT(regdate, '%Y-%m-%d %h:%i:%s') regdate from MEMBER" +
      qry_where +
      qry_orderby +
      qry_limit
  );
  const rs2 = db.query("select count(mno) cnt from MEMBER" + qry_where);
  const [data1, data2] = await Promise.all([rs1, rs2]);
  const result = {
    list: data1[0],
    total: data2[0][0].cnt,
  };

  return NextResponse.json(result);

  // const rs_data = {
  //   list: NextResponse.json(rows),
  //   total: NextResponse.json(rows_total[0].cnt),
  // };
  // return JSON.parse({ a: 1, b: 2 });

  // const [rows_total] = await db.query(
  //   "select count(mdno) cnt from MEDIA" + qry_where
  // );
  // const rowsCnt = NextResponse.json(rows_total[0].cnt);
  // // rowsCnt[0].rows = 555;

  // //페이지 데이터
  // const pageData = {
  //   total: listRows,
  //   page: page,
  //   listRows: rs_data,
  // };

  // const res = NextResponse.json({ no: 1221, name: "테스트111" });
  // const res = NextResponse.json(rowsCnt);
  // return NextResponse.json(rows);
}
