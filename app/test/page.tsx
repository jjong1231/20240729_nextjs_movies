import React from "react";

import { get_data, get_data2, db_insert } from "../api/db_select";

export default async function page() {
  const data = {
    a: "11",
    b: 11,
    c: "cc",
  };
  const rs = await get_data(data);
  console.log("stringify => ", JSON.stringify(rs));
  return (
    <div>
      <h1>Test</h1>
      <br></br>
      {/* {JSON.stringify(rs)} */}
      <ul>
        {rs.map((m, i) => (
          <li key={m.idx}>
            {m.name} // {m.idx}
          </li>
        ))}
      </ul>
    </div>
  );
}
