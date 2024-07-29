import React from "react";
import { API_URL } from "../app/movies/page";

async function getInfo(id: string) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const m = await getInfo(id);
  return (
    <div className="flex max-w-4xl border bg-white rounded overflow-hidden shadow-lg p-4">
      <img
        src={m.poster_path}
        alt={m.title}
        className="w-72 h-auto object-cover"
      />
      <div className="ml-4 flex flex-col justify-center text-left">
        <h2 className="text-xl font-bold">{m.title}</h2>
        <h3 className="text-lg text-yellow-500">★{m.vote_average}</h3>
        <p className="text-gray-700">{m.overview}</p>
      </div>
    </div>
  );
}
