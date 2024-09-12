"use client";
import React from "react";
import mediaList from "./api/mediaList";

import useStore from "./useStore";
import Test from "../components/test";

export default function Index({ users }) {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const aa = () => alert("aa");

  return (
    <div>
      <h1>Index Home</h1>
      <ul>
        {/* {user.map((m, i) => (
          <li key={m.id}>
            {m.no} // {m.name} // {m.age}
          </li>
        ))} */}
      </ul>

      <button className="m-4 border p-2" onClick={aa}>
        버튼
      </button>
      <hr />

      <p></p>
      {/* <h2>Count: {count}</h2> */}

      <Test></Test>
    </div>
  );
}
