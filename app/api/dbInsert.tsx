import db from "../../lib/db";

export default async function DbInsert(data) {
  const rs_json = {
    rs: "err",
    msg: "관리자에게 문의하세요!",
  };
  console.log("data", data);
  if (data.md_name) rs_json.msg = data.md_name;
  //prettier-ignore
  const qry = "insert into MEDIA (md_name, regdate) values ('테스트', now())";
  const result = await db.execute(qry);
  // console.log(result);
  return rs_json;
}
