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
      <button onClick={alertOpen}>팝업보기</button>
      <p></p>
      <button onClick={colorGreen}>colorGreen</button>
      <p></p>
      <button onClick={colorRed}>colorRed</button>
      <p></p>
      <button onClick={colorYellow}>colorYellow</button>
      <p></p>

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
