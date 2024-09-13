import React from "react";

export default async function page() {
  const api = "http://localhost:3000/api/static";
  async function getData() {
    const res = await fetch(api, {
      method: "GET",
      cache: "no-store",
    });
    const json = res.json();
    return json;
  }
  const data = await getData();
  return (
    <div>
      <h1>static data</h1>
      <h3>페이지로드시 데이터를 가져올때 </h3>
      {JSON.stringify(data)}
    </div>
  );
}
