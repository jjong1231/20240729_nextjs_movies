import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="bg-black text-white p-4 fixed w-full top-0">
      <ul className="flex space-x-4 justify-center">
        <li className="px-5 hover:scale-150 duration-300">
          <Link href="/" className="">
            Home
          </Link>
        </li>
        <li className="px-5 hover:scale-150 duration-300">
          <Link href="/aa">About me</Link>
        </li>
        <li className="px-5 hover:scale-150 duration-300">
          <Link href="/movies">Movies</Link>
        </li>
      </ul>
    </div>
  );
}
