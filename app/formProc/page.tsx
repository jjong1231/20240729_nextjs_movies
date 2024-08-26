"use client";
import React, { useEffect, useState } from "react";
import Alert_red from "../../components/alert_red";
// import insertData from "../api/insert";

export default function page() {
  // function insert(D) {
  //   const rs = insertData(D);
  //   return rs;
  // }

  const [alert_show, set_alert_show] = useState(false);
  const [alert_red, set_alert_red] = useState("");
  const [alert_msg, set_alert_msg] = useState("");

  const D = { TB: "MEDIA", data: { md_name: "이거슨3", memo: "메모래요~3" } };
  // const rs = insert(D);

  // console.log("완료! ", rs);

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
      Alert_red(alert_msg);
      return;
    }
  };
  //알림창에서 닫기버튼 실행
  const alert_close = () => {
    set_alert_show(false);
  };

  return (
    <div>
      <h1>db_proc 데이처 처리</h1>
      <ul>
        <li>
          <input type="text" name="md_name" onChange={fn_change} />
        </li>
        <li>
          <input type="text" name="memo" onChange={fn_change} />
        </li>
        <li>
          <button className="proc" onClick={fn_proc}>
            저장
          </button>
        </li>
      </ul>
      {alert_show ? (
        <Alert_red alertMsg={alert_msg} alertClose={alert_close} />
      ) : null}
    </div>
  );
}
