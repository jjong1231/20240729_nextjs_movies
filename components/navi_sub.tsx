import Link from "next/link";
import React from "react";

interface subProps {
  name: string;
  link: string;
}
export default function Navi_sub({ name, link }: subProps) {
  return (
    <div className="bg-red-400 rounded-lg my-1">
      <Link href={link}>{name}</Link>
    </div>
  );
}
