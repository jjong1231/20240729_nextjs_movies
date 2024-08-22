import React from "react";
import insertData from "../../api/insert";

export default function page() {
  function insert(D) {
    const rs = insertData(D);
    return rs;
  }

  const D = { TB: "MEDIA", data: { md_name: "이거슨3", memo: "메모래요~3" } };
  const rs = insert(D);
  console.log("완료! ", rs.sqlMessage);

  return (
    <div>
      <h1>db_proc</h1>
    </div>
  );
}
