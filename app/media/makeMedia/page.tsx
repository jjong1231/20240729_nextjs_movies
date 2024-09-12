"use client";

import React, { useState } from "react";
import AlertColor from "../../../components/alertColor";

export default function page() {
  const [alertView, setAlertView] = useState(false);
  const [alertColor, setAlertColor] = useState("yellow");
  const [alertMsg, setAlertMsg] = useState("경고!!");

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
      setAlertMsg("매체명을 입력하세요!");
      setAlertView(true);
      return;
    }
    //데이터 처리
    // const aa = db_insert();
  }

  //알림창에서 닫기버튼 실행
  const alertClose = () => {
    setAlertView(false);
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
}
