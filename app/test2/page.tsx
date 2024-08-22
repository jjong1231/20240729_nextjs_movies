/**
 * test2.tsx
 */
"use client";

import React, { useEffect, useState } from "react";

interface Type {
  mdno: number;
  md_name: string;
  memo: string;
  regdate: string;
}

export default function Page() {
  const [data, setData] = useState<Type[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/test2", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ table: "MEDIA", where: [] }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Test2</h1>
      <br />
      {data.length === 0 ? (
        <div>No data available</div>
      ) : (
        <ul>
          <li>
            <div className="flex space-x-4 w-full">
              <div className="text-center w-full">name</div>
              <div className="text-center w-full">memo</div>
              <div className="text-center w-full">regdate</div>
            </div>
          </li>
          {data.map((m) => (
            <li key={m.mdno}>
              <div className="flex space-x-4 w-full">
                <div className="text-center w-full">{m.md_name}</div>
                <div className="text-center w-full">{m.memo}</div>
                <div className="text-center w-full">{m.regdate}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
