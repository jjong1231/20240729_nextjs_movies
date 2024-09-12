"use client";
import React, { useEffect, useState } from "react";
import Pagenation from "../../components/pagenation";
import TableList from "../../components/memberList";
// import listCntStore from "../../stores/global";

export default function page() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); //현재페이지
  const [lastPage, setLastPage] = useState(1); //마지막페이지
  const [keywords, setKeywords] = useState(""); //검색어
  const listRows = 10; //1페이지 게시물수
  const api_url = "/api/mediaList";
  const fetchData = async (getPage = 1) => {
    try {
      const inputBox = document.getElementById("keywords");
      const keywords = inputBox.value.trim();
      const res = await fetch(api_url, {
        method: "POST",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: getPage,
          listRows: listRows,
          keywords: keywords,
        }),
      });
      const json = await res.json();

      setData(json.list);
      const lastPage = Math.ceil(json.total / listRows);
      // console.log(json.total, listRows, lastPage);
      setLastPage(lastPage);
    } catch (e) {
      console.log("에러", e);
    }
  };
  useEffect(() => {
    fetchData(1);
    const inputBox = document.getElementById("keywords");
    inputBox.addEventListener("keyup", (e) => {
      if (e.key == "Enter") {
        setPage(1);
        fetchData(1, inputBox.value.trim());
        inputBox.value = inputBox.value.trim();
      }
    });
  }, []);

  //페이지 이동
  const goPage = (go) => {
    console.log(location.pathname);
    //뒤로가기시
    sessionStorage.setItem(location.pathname, go);

    setPage(go);
    fetchData(go);
  };

  //키워드 검색
  const search = () => {
    setPage(1);
    const inputBox = document.getElementById("keywords");
    const keywords = inputBox.value.trim();
    inputBox.value = keywords;
    fetchData(1, keywords);
  };

  return (
    <div>
      <div className="flex justify-between items-center p-2">
        <h1 className="text-5xl font-extrabold dark:text-white">회원리스트</h1>
        <div>
          <input
            id="keywords"
            type="text"
            name="keywords"
            className="rounded-sm text-right px-1"
            placeholder="ID or Name"
            defaultValue={""}
          />{" "}
          <button
            type="button"
            className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={search}
          >
            검색
          </button>
        </div>
      </div>
      <TableList data={data}></TableList>
      <Pagenation page={page} last={lastPage} goPage={goPage}></Pagenation>
    </div>
  );
}
