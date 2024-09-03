"use client";
import React, { useState } from "react";
import { AlertRed, AlertGreen, AlertYellow } from "../../../components/alert";

export default function Alert() {
  const [alert_show, set_alert_show] = useState(false);
  const [alertRed, setAlertRed] = useState(false);
  const [alertYellow, setAlertYellow] = useState(false);
  const [alertGreen, setAlertGreen] = useState(false);
  const [alert_msg, set_alert_msg] = useState("");

  //알림창에서 닫기버튼 실행
  const alert_close = () => {
    setAlertRed(false);
    setAlertYellow(false);
    setAlertGreen(false);
  };

  const alertShow = (e, c) => {
    console.log("c", c);
    set_alert_msg(c + " 메세지!");
    switch (c) {
      case "red":
        setAlertRed(true);
        break;
      case "green":
        setAlertGreen(true);
        break;
      default:
        setAlertYellow(true);
        break;
    }
  };

  return (
    <div>
      <h1>Alert</h1>
      <hr />
      <ul>
        <li>
          <button onClick={(e) => alertShow(e, "red")}>빨간 경고창</button>
          {alertRed ? (
            <AlertRed alertMsg={alert_msg} alertClose={alert_close} />
          ) : null}
        </li>
        <li>
          <button onClick={(e) => alertShow(e, "yellow")}>노랑 경고창</button>
          {alertYellow ? (
            <AlertYellow alertMsg={alert_msg} alertClose={alert_close} />
          ) : null}
        </li>
        <li>
          <button onClick={(e) => alertShow(e, "green")}>녹색 경고창</button>
          {alertGreen ? (
            <AlertGreen alertMsg={alert_msg} alertClose={alert_close} />
          ) : null}
        </li>
        <li>
          {/* <AlertRed alertMsg={alert_msg} alertClose={alert_close} /> */}
        </li>
        <li>
          {/* <AlertYellow alertMsg={alert_msg} alertClose={alert_close} /> */}
        </li>
        <li>
          {/* <AlertGreen alertMsg={alert_msg} alertClose={alert_close} /> */}
        </li>
      </ul>
    </div>
  );
}
