"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navi_sub from "./navi_sub";
import Nav_slot from "./nav_slot";

export default function Nav() {
  const navi = [
    { name: "Home", link: "/" },
    {
      name: "Test",
      link: "/test",
      add: [
        { name: "static", link: "/test/static" },
        { name: "useState", link: "/test/useState" },
        { name: "function", link: "/test/function" },
        { name: "용주스타일", link: "/test2" },
        { name: "폼전송", link: "/formProc" },
      ],
    },
    { name: "AboutMe", link: "/aa" },
    {
      name: "Media",
      link: "/media",
      add: [
        { name: "생성", link: "/media/makeMedia" },
        { name: "영역", link: "/media/makeZone" },
      ],
    },
    { name: "Movies", link: "/movies" },
  ];

  useEffect(() => {
    document.querySelectorAll(".navi li").forEach(function (navLi) {
      navLi.addEventListener("mouseenter", function () {
        this.querySelector("div").classList.add("sub_show");
      });
    });
    document.querySelectorAll(".navi li").forEach(function (navLi) {
      navLi.addEventListener("mouseleave", function () {
        this.querySelector("div").classList.remove("sub_show");
      });
    });
  }, []);
  return (
    <div className="container mx-auto p-0">
      {/* <Nav_slot name="sdfsfd" arr="dd" /> */}
      <nav>
        <ul className="navi flex space-x-4 justify-center">
          {navi.map((v, i) => (
            <li key={i} className={`nav${i} px-5 text-center relative`}>
              <Link
                href={v.link}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg"
              >
                {v.name}
              </Link>
              <div
                key={`${v.name}Div${i}`}
                className={`${v.name}Div${i} hidden absolute w-[100%] left-0`}
              >
                {v.add
                  ? v.add.map((v2, i2) => (
                      <Navi_sub
                        key={`subMenu${i2}`}
                        name={v2.name}
                        link={v2.link}
                      ></Navi_sub>
                    ))
                  : null}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
