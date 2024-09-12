"use client";
import React, { useEffect } from "react";
import selectData from "../../api/select";

export default async function page({ params: { id } }) {
  // const page = ({ params: { id } }) => {
  const col = "mno, id, name, DATE_FORMAT(regdate, '%y-%m-%d %T') regdate",
    where = "mno=" + id,
    limit = "";

  const data = await selectData("MEMBER", col, where, limit);
  const v = data[0];

  const handleClick = () => {
    alert("Button clicked!");
  };

  const aa = () => {
    alert(1);
  };

  return (
    <div>
      <h1>회원상세</h1>
      {/* {id}/{JSON.stringify(data)} */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-8 py-3 dark:bg-gray-800">
                ID
              </th>
              <td className="px-8 py-4">{v.id}</td>
            </tr>
            <tr>
              <th scope="col" className="px-8 py-3 dark:bg-gray-800">
                이름
              </th>
              <td className="px-8 py-4">{v.name}</td>
            </tr>
            <tr>
              <th scope="col" className="px-8 py-3 dark:bg-gray-800">
                등록일
              </th>
              <td className="px-8 py-4">{v.regdate}</td>
            </tr>
          </tbody>
        </table>
        <button
          type="button"
          className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => alert(1)}
        >
          목록
        </button>
      </div>
    </div>
  );
}
