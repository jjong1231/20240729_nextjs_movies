import React from "react";
import MovieCard from "../../components/movieCard";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
async function getMovies() {
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
}

export default async function page() {
  const movies = await getMovies();
  return (
    <div>
      {/* {JSON.stringify(movies)} */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 max-w-6xl w-full">
        {movies.map((m) => (
          <MovieCard
            key={m.id}
            id={m.id}
            title={m.title}
            poster_path={m.poster_path}
          />
        ))}
      </ul>
    </div>
  );
}
