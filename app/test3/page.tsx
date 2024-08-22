// "use client";
import React, { useEffect, useState } from "react";

export const API_URL = "http://localhost:3000/api/test3";
console.log(API_URL);
async function getData() {
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
}

export default async function page() {
  const aaa = await getData();

  console.log("aaa ==>", aaa);

  return (
    <div>
      <h1>test3!@@</h1>
      {JSON.stringify(aaa)}
    </div>
  );
}
