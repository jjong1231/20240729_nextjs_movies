import React from "react";
import { db_insert } from "../../api/db_select";

export default async function page() {
  const aa = await db_insert({});
  return (
    <div>
      <h1>db_proc</h1>
    </div>
  );
}
