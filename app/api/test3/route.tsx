import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.json({ no: 333, name: "테스트111" });
  res.headers.set(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  res.headers.set("Pragma", "no-cache");
  res.headers.set("Expires", "0");
  res.headers.set("Surrogate-Control", "no-store");
  return res;
}
