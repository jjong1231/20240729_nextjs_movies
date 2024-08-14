export default async function MediaList(db_select) {
  const API_URL = "http://jjong1231.dothome.co.kr/api/getData.php";
  const res = await fetch(API_URL, {
    cache: "no-store",
    method: "POST", // HTTP 메서드 지정
    headers: {
      "Content-Type": "application/json", // JSON 형식으로 데이터 전송
    },
    body: JSON.stringify(db_select), // 데이터를 JSON 문자열로 변환하여 본문에 포함
  });
  const json = await res.json();
  console.log("전송 ===================>", db_select);
  console.log("수신 ===================>", json);
  return json;
}
