import db from "../../lib/db";

export default async function selectData(TB, col, where, limit) {
  let query = "select " + col + " from " + TB;
  if (where) query += " where " + where;
  if (limit) query += limit;

  // console.log("query =============> ", query);
  try {
    const [rs] = await db.query(query);

    return rs;
  } catch (e) {
    return ["err", e];
  }
}
