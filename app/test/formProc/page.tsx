"use client";
import React, { useEffect, useState } from "react";
// import AlertRed from "../../components/alert_red";
import { AlertGreen, AlertRed, AlertYellow } from "../../../components/alert";
import "../../../css/formTest.css";

export default function FormProc() {
  // function insert(D) {
  //   const rs = insertData(D);
  //   return rs;
  // }

  const [alert_show, set_alert_show] = useState(false);
  const [alert_msg, set_alert_msg] = useState("");

  const D = { TB: "MEDIA", data: { md_name: "이거슨3", memo: "메모래요~3" } };
  const [formData, setFormData] = useState({});
  useEffect(() => {}, []);
  const fn_change = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const fn_proc = () => {
    console.log(Object.keys(formData).length, formData);
    if (Object.keys(formData).length < 1) {
      set_alert_msg("빈값있음!");
      set_alert_show(true);
      AlertRed(alert_msg);
      return;
    }
    AlertRed(alert_msg);
  };
  //알림창에서 닫기버튼 실행
  const alert_close = () => {
    set_alert_show(false);
  };

  return (
    <div>
      <h1>db_proc 데이처 처리</h1>
      <ul className="formTest">
        <li>
          <input type="text" name="md_name" onChange={fn_change} />
        </li>
        <li>
          <input type="text" name="memo" onChange={fn_change} />
        </li>
        <li>
          <button className="proc btnSubmit" onClick={fn_proc}>
            저장
          </button>
        </li>
      </ul>
      {alert_show ? (
        <AlertRed alertMsg={alert_msg} alertClose={alert_close} />
      ) : null}
    </div>
  );
}
