import React from "react";

export async function POST(req) {
  const v = await req.json();
  console.log(v);
  return <div></div>;
}
