import React from "react";

const fetchData = async () => {
  const res = await fetch(process.env.localDomain + "/api/test", {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify({ mno: 6 }),
  });
  const json = await res.json();
  console.log(json);
  return json;
};
export default function page() {
  const rs = fetchData();
  return (
    <div>
      <h1>db post</h1>
      {JSON.stringify(rs)}
    </div>
  );
}
