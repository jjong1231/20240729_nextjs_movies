import React from "react";
import { API_URL } from "../app/movies/page";

async function getVideo(id: string) {
  const res = await fetch(`${API_URL}/${id}/videos`);
  return res.json();
}
export default async function MovieVideo({ id }: { id: string }) {
  const videos = await getVideo(id);
  // const key = "https://www.youtube.com/embed/" + v[0].key;
  const key = videos[0].key;
  console.log(videos);
  return (
    <div className="w-full container">
      {videos.map((v) => (
        <iframe
          key={v.id}
          src={`https://www.youtube.com/embed/${v.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={v.name}
          className="w-full container_iframe h-[520px]"
        />
      ))}

      {/* <iframe
        key={v.id}
        src={`https://www.youtube.com/embed/${key}`}
        className="w-full h-[480px]"
      ></iframe> */}
    </div>
  );
}
