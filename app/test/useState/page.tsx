"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [data, setData] = useState(false);
  const name = "name";
  const email = "email";
  const age = "age";

  useEffect(() => {
    const api = "/api/useState";
    const fetchData = async () => {
      try {
        const res = await fetch(api, {
          method: "POST",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            TB: "MEDIA",
            wh_col: ["md_name"],
            wh_then: ["like"],
            wh_val: ["%이름%"],
          }),
        });
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.log("에러", e);
      }
    };
    fetchData();
  }, []);

  const isClick = (e) => {
    console.log(e);
  };
  return (
    <div>
      <h1>useState data</h1>
      <h3>비동기방식 데이터 호출</h3>
      <ul>
        {data
          ? data.map((v) => (
              <li key={v.mdno} onClick={isClick} mdno={v.mdno}>
                {v.md_name} / {v.memo} / {v.regdate}
              </li>
            ))
          : "Loading.."}
      </ul>
    </div>
  );
}
