import db from "../../lib/db";

export async function get_data(data) {
  console.log(data);
  // const [rows] = await db.execute("select * from MEDIA");
  const [rows] = await db.execute("select * from adtive.login_user");
  return rows;
}

export async function get_data2() {
  const [rows] = await db.execute("select * from MEDIA limit 1");
  return rows;
}

export async function db_insert(data) {
  console.log(data);
  const [rows] = await db.execute(
    "insert into MEDIA (md_name, regdate) values ('테스트', new())"
  );
  return rows;
}
