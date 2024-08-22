import db from "../../lib/db";

export default async function selectData(TB, wh) {
  console.log(wh);
  const where = "",
    params = [];

  params.push("%22%");

  try {
    const [rs] = await db.query(
      "select mdno, md_name, memo, DATE_FORMAT(regdate, '%y-%m-%d %T') regdate from " +
        TB +
        " where memo like ?",
      params
    );

    return rs;
  } catch (e) {
    return ["err", e];
  }
}
