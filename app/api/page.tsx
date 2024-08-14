import db from "../../lib/db";

export async function fetchUser() {
  const [rows] = await db.execute("select * from adtive.login_user");
  return rows;
}
