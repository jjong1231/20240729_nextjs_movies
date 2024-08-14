// import db from "../../lib/db";

export default async function Insert() {
  // const API_URL = "http://jjong1231.dothome.co.kr/api/insert.php";
  const API_URL = "https://www.adplex.co.kr/_pjh/t2.php";

  const data = { name: "매체1" };
  const res = await fetch(API_URL, {
    // cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // console.log(res);
  console.log(res.json());
  // res.map((v) => {
  //   console.log(v);
  // });
  return JSON.stringify(res);
}
