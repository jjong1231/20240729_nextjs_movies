"use client";
import React, { useState } from "react";
import AlertColor from "../../../components/alertColor";

const page = () => {
  const [alertView, setAlertView] = useState(false);
  const [alertColor, setAlertColor] = useState("green");
  const [alertMsg, setAlertMsg] = useState("경고!!");

  const alertOpen = () => {
    setAlertMsg("메세지입니다!");
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
  return (
    <div>
      <h1>alertColor</h1>

      <button
        type="button"
        onClick={alertOpen}
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        팝업보기
      </button>

      <button
        type="button"
        onClick={colorGreen}
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Green
      </button>

      <button
        type="button"
        onClick={colorRed}
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Red
      </button>

      <button
        type="button"
        onClick={colorYellow}
        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
      >
        Yellow
      </button>

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

export default page;
