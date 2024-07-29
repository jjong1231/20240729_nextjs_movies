import Link from "next/link";
import React from "react";

interface MovieProps {
  title: string;
  id: string;
  poster_path: string;
}
export default function MovieCard({ title, id, poster_path }: MovieProps) {
  return (
    <div>
      <li
        key={id}
        className="bg-neutral-500 text-white border rounded overflow-hidden shadow"
      >
        <Link href={`/movies/${id}`}>
          <img src={poster_path} alt={title} className="w-full h-auto" />
          <h3 className="text-xs text-center p-1">{title}</h3>
        </Link>
      </li>
    </div>
  );
}
