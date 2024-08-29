"use client";
import React from "react";
import useStore from "../useStore";

export default function page() {
  const { count } = useStore();
  return (
    <div>
      <h1>Test</h1>
      <p></p>
      count:{count}
    </div>
  );
}
