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
      {/* <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 max-w-6xl w-full gap-2"> */}
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 content-around">
        {movies.map((m) => (
          // <li>{m.title}</li>
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
