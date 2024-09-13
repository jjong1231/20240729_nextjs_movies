// "use client";
import React from "react";
import useStore from "../useStore";

export default function page() {
  // const { count } = useStore();
  const count = 1;

  fetch("/api/getData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ aa: "aa" }),
  });

  return (
    <div>
      <h1>Test</h1>
      <p></p>
      count:{count}
    </div>
  );
}
