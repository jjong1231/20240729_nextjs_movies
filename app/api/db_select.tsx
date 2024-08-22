"use client";
import db from "../../lib/db";

export async function get_data(data) {
  // console.log(data);
  const [rows] = await db.execute("select * from MEDIA");
  // const [rows] = await db.execute("select * from adtive.login_user");
  return rows;
}

export async function get_data2() {
  const [rows] = await db.execute("select * from MEDIA limit 1");
  return rows;
}

export async function db_insert(D) {
  const TB = D.TB,
    VAL = D.data;
  console.log("db_insert ===========> ", TB);
  console.log("db_insert ===========> ", VAL);
  const col = [],
    val = [];
  VAL.map((v, k) => {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@", v, k);
  });
  // return "123123";
  const [rows] = await db.execute("select * from adtive.login_user");

  //prettier-ignore
  // const [rows] = await db.execute( "insert into " + TB + " (" + col.join(",") + ", regdate) values (" + val.join(",") + ", now())" );
  return rows;
}
