"use client";
import React, { useState } from "react";
import { AlertRed, AlertGreen, AlertYellow } from "../../../components/alert";

export default function Alert() {
  const [alert_show, set_alert_show] = useState(false);
  const [alert_red, set_alert_red] = useState("");
  const [alert_msg, set_alert_msg] = useState("");

  //알림창에서 닫기버튼 실행
  const alert_close = () => {
    set_alert_show(false);
  };

  const alertShow = () => {
    set_alert_msg("빈값있음!");
    set_alert_show(true);
    AlertRed(alert_msg);
  };

  return (
    <div>
      <h1>Alert</h1>
      <hr />
      <ul>
        <li>
          <button onClick={alertShow}>빨간 경고창</button>
          {alert_show ? (
            <AlertRed alertMsg={alert_msg} alertClose={alert_close} />
          ) : null}
        </li>
        <li>
          <button onClick={AlertYellow}>노랑 경고창</button>
        </li>
        <li>
          <button onClick={AlertGreen}>녹색 경고창</button>
        </li>
      </ul>
    </div>
  );
}
