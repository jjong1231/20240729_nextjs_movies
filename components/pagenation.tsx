import React, { useState } from "react";
import AlertColor from "./alertColor";

interface pageNav {
  page: number;
  last: number;
  goPage: (go: number) => void;
}

const Pagenation = ({ page, last, goPage }: pageNav) => {
  //현제페이지정보

  const [alertView, setAlertView] = useState(false);
  const [alertColor, setAlertColor] = useState("yellow");
  const [alertMsg, setAlertMsg] = useState("마지막 페이지입니다.");
  const alertOpen = () => {
    // setAlertMsg("메세지입니다!");
    setAlertView(true);
  };
  const alertClose = () => {
    setAlertView(false);
  };
  const colorGreen = () => {
    setAlertColor("green");
    alertOpen();
  };
  const colorRed = () => {
    setAlertColor("red");
    alertOpen();
  };
  const colorYellow = () => {
    setAlertColor("yellow");
    alertOpen();
  };

  let start = page - 2 > 0 ? page - 2 : 1;
  let end = last <= 5 ? last : page + 2 <= last ? page + 2 : last;
  if (last <= 5) start = 1; //전체 페이지가 5이상일때는 마지막페이지번호 수정
  if (end <= 5 && last >= 5) end = 5; //전체 페이지가 5이상일때는 마지막페이지번호 수정
  const now = page;
  const classNow =
    "flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white";
  const classPage =
    "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";
  const forData = [];
  for (let i = start; i <= end; i++) forData.push(i);
  console.log("page", page, "last", last);
  const prePage = () => {
    if (page == start) {
      //첫페이지 알림
      setAlertMsg("첫 페이지입니다.");
      alertOpen();
    } else {
      goPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page == last) {
      //마지막페이지 알림
      setAlertMsg("마지막 페이지입니다.");
      alertOpen();
    } else {
      goPage(page + 1);
    }
  };

  const goStartEnd = (num) => {
    goPage(num);
  };

  return (
    <div>
      {/* 현재:{now} / 시작:{start} / 끝:{end} / 마지막:{last} */}
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm mt-4">
          {start > 1 ? (
            <li>
              <button
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => goStartEnd(1)}
              >
                start
              </button>
            </li>
          ) : (
            ""
          )}
          <li>
            <button
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={prePage}
            >
              Previous
            </button>
          </li>
          {forData.map((v) => (
            <li
              key={v}
              className={v == now ? classNow : classPage}
              onClick={() => goPage(v)}
            >
              {v}
            </li>
          ))}
          <li>
            <button
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={nextPage}
            >
              Next
            </button>
          </li>
          {page < last - 2 ? (
            <li>
              <button
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => goStartEnd(last)}
              >
                end
              </button>
            </li>
          ) : (
            ""
          )}
        </ul>
      </nav>
      {alertView ? (
        <AlertColor
          alertColor={alertColor}
          alertMsg={alertMsg}
          alertClose={alertClose}
        ></AlertColor>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagenation;
