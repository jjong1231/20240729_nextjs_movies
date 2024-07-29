import React, { Suspense } from "react";
import MovieInfo from "../../../components/movieInfo";
import MovieVideo from "../../../components/movieVideo";

export default function page({ params: { id } }) {
  return (
    // <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="p-4">
      <Suspense>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
