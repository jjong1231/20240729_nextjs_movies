import Link from "next/link";
import React from "react";
import Nav from "./nav";

export default function Header() {
  return (
    <div className="bg-black text-white p-4 fixed w-full top-0">
      <Nav />
    </div>
  );
}
