"use client";
import { useEffect, useState } from "react";

export default function page({ params: v }) {
  // console.log("======>", v);
  // const mno = v.id;

  const [mem, setMem] = useState(false);

  const api = "http://localhost:3000/api/memberInfo";
  const getData = async () => {
    const res = await fetch(api, {
      method: "POST",
      cache: "no-store",
      body: JSON.stringify({ mno: v.id }),
    });
    const json = await res.json();
    console.log("===================>", json);
    setMem(json);
    // return json;
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>회원상세</h1>
      {JSON.stringify(mem)}
      {/* {process.env.DB_HOST} */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-8 py-3 dark:bg-gray-800">
                ID
              </th>
              <td className="px-8 py-4">{mem.id}</td>
            </tr>
            <tr>
              <th scope="col" className="px-8 py-3 dark:bg-gray-800">
                이름
              </th>
              <td className="px-8 py-4">{mem.name}</td>
            </tr>
            <tr>
              <th scope="col" className="px-8 py-3 dark:bg-gray-800">
                등록일
              </th>
              <td className="px-8 py-4">{mem.regdate}</td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => (location.href = "/member")}
        >
          목록
        </button>
      </div>
    </div>
  );
}
