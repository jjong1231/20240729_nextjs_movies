import { stringify } from "querystring";
import db from "../../lib/db";

export default async function insertData(D) {
  const TB = D.TB;

  //prettier-ignore
  var col = false, val = false;
  // console.log("=============>", Object.keys(D.data));
  // console.log("=============>", Object.values(D.data));

  Object.keys(D.data).map((v) => {
    //prettier-ignore
    if (!col) col = v; else col += ", " + v;
  });

  const values = Object.values(D.data);
  //prettier-ignore
  const rs = await db.query( "insert into " + TB + " (mdno," + col + ", regdate) values (3,?, ?, now())", values );

  console.log("============", rs);
  return rs;
}
