import db from "../../../lib/db";

// export default async function selectData(TB, WH) {
export default async function page() {
  // const [rows] = await db.execute("select * from " + TB);
  const [rows] = await db.query("select mno,id,name,regdate from MEMBER");
  return JSON.stringify(rows);
}
