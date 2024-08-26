import React from "react";
import selectData from "../../api/select";

export default async function Page() {
  const wh = [];
  wh.push({ col: "md_name", where: "=", val: "이름2" }); //컬럼명, 조건, 값
  wh.push({ col: "memo", where: "=", val: "2222" }); //컬럼명, 조건, 값

  // const [data, setData] = useState([]);

  // const data = ["err", "ddd"];

  // useEffect(() => {
  const data = await selectData("MEDIA", wh);
  console.log("stringify ===============> ", JSON.stringify(data));
  // setData([
  //   { mdno: 10, md_name: "미디어10", memo: "메모11", regdate: "2024.08.19" },
  //   { mdno: 11, md_name: "미디어11", memo: "메모22", regdate: "2024.08.19" },
  //   { mdno: 12, md_name: "미디어12", memo: "메모33", regdate: "2024.08.19" },
  // ]);
  // }, []);
  const alertMsg = () => {
    alert("111");
  };
  return (
    <div>
      <h1>Test</h1>
      <br></br>
      {/* {JSON.stringify(data)} */}
      {data[0] == "err" ? (
        data[1]
      ) : (
        <ul>
          <li>
            <div className="flex space-x-4 w-full">
              <div className="text-center w-full">name</div>
              <div className="text-center w-full">memo</div>
              <div className="text-center w-full">regdate</div>
            </div>
          </li>

          {/* {JSON.stringify(data)} */}
          {data.map((m) => {
            return (
              <li key={m.mdno}>
                <div className="flex space-x-4 w-full">
                  <div className="text-center w-full">{m.md_name}</div>
                  <div className="text-center w-full">{m.memo}</div>
                  <div className="text-center w-full">{m.regdate}</div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
