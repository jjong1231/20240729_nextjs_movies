"use client";

import React, { useState } from "react";
import Alert_red from "../../../components/alert_red"; //알림창 레드
import { db_insert } from "../../api/db_select";

export default function page() {
  const [alert_show, set_alert_show] = useState(false);
  const [alert_msg, set_alert_msg] = useState("");
  const [mdName, setMdName] = useState("");
  const data = {
    md_name: mdName,
  };
  const changeMdname = (e) => {
    setMdName(e.target.value);
  };

  //폼체크 완료후 데이터 처리
  function fn_insert() {
    console.log("전송데이터 : ", data);
    if (data.md_name == "") {
      set_alert_msg("매체명을 입력하세요!");
      set_alert_show(true);
      return;
    }
    //데이터 처리
    const aa = db_insert();
    console.log("aaaa");
  }

  //알림창에서 닫기버튼 실행
  const alert_close = () => {
    set_alert_show(false);
  };

  return (
    <div>
      <h1>매체생성</h1> <br />
      <ul>
        <li>
          <input type="text" value={mdName} onChange={changeMdname} />
        </li>
        <li>
          <button onClick={fn_insert}>생성</button>
        </li>
      </ul>
      {alert_show ? (
        <Alert_red alertMsg={alert_msg} alertClose={alert_close} />
      ) : null}
    </div>
  );
}
