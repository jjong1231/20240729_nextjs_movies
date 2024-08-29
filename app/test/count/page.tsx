"use client";
import React from "react";
import useStore from "../../useStore";

export default function Count() {
  const { count, increment, decrement } = useStore();
  return (
    <div>
      <h1>Count</h1>
      <h3>{count}</h3>
      <button onClick={increment}>카운트 증가</button> /{" "}
      <button onClick={decrement}>카운트 감소</button>
    </div>
  );
}
