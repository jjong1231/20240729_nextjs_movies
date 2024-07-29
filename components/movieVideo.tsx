import React from "react";
import { API_URL } from "../app/movies/page";

async function getVideo(id: string) {
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}
export default async function MovieVideo({ id }: { id: string }) {
  const v = await getVideo(id);
  const key = "https://www.youtube.com/embed/" + v[0].key;
  console.log(typeof v[4]);
  return (
    <div className="w-full ">
      <iframe key={v.id} src={key} className="w-full h-[480px]"></iframe>
    </div>
  );
}
