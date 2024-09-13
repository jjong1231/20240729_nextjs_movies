"use client";
import React, { useEffect, useState } from "react";
import MediaList from "../api/mediaList";

export default async function page() {
  const db_select = { table: "test", where: [{ mdno: 1 }] };
  const mediaList = await MediaList(db_select);
  console.log(mediaList);

  // function make_media() {}
  // function make_zone() {}

  return (
    <div className="space-x-2">
      <h1>media</h1>
      {mediaList
        ? mediaList.map((v) => (
            <li>
              {v.name} / {v.age}
            </li>
          ))
        : false}
      <ul>
        <li onClick={() => alert(22)}>1111</li>
      </ul>
    </div>
  );
}
