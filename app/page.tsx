"use client";

import React from "react";
import mediaList from "./api/mediaList";

import useStore from "./useStore";

// export const API_URL = "https://www.adplex.co.kr/_pjh/t2.php";
// export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
// export const API_URL = "http://jjong1231.dothome.co.kr/api/getData.php";
// async function getMovies() {
//   const res = await fetch(API_URL, { cache: "no-store" });
//   const json = await res.json();
//   return json;
// }

// export default async function Index({ users }) {
export default function Index({ users }) {
  const { count, increment, decrement } = useStore();

  // const db_select = { table: "MEDIA", data: [{ mdno: 1 }] };
  // const user = await mediaList(db_select);
  // const user = await fetchUser();
  // console.log(JSON.stringify(user));
  // console.log("stringify => ", JSON.stringify(user));

  // const data = await Insert();
  // console.log(data);
  // const data = await getMovies();
  // const data = getMovies();
  // console.log(data);

  // const api_dothome = "http://jjong1231.dothome.co.kr/api/insert.php";
  // const data = { a: "aa", b: "bb", c: "cc" };
  // const res = await fetch(api_dothome, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });
  // const rs = await res.json();
  // console.log(rs);

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
      <p></p>
      <h2>Count: {count}</h2>
    </div>
  );
}
