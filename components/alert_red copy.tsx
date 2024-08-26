import React, { useState } from "react";

export default function Alert_red(props: { msg: string; isShow: boolean }) {
  // console.log(JSON.stringify(v));

  const [alert_show, set_alert_show] = useState(false);
  const [alert_red, set_alert_red] = useState("");

  //알림창에서 닫기버튼 실행
  const alert_close = () => {
    set_alert_show(false);
  };

  return (
    <div>
      <div className="fixed w-full h-full top-0 left-0 bg-slate-500 opacity-75 z-40"></div>
      <div
        id="alert-additional-content-2"
        className="fixed w-3/4 p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800 z-50"
        role="alert"
      >
        <div className="flex items-center">
          <svg
            className="flex-shrink-0 w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <h3 className="text-lg font-medium">This is a danger alert</h3>
        </div>
        <div className="mt-2 mb-4 text-sm text-left">* {props.msg}</div>
        <div className="flex">
          <button
            type="button"
            className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            onClick={alert_close}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
