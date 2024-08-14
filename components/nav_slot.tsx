import React, { useState } from "react";

interface dropProps {
  name: string;
  arr: string;
}

export default function Nav_slot({ name, arr }: dropProps) {
  const [isOpen, setIsOpen] = useState(false);
  const eMouseEnter = () => {
    setIsOpen(true);
  };
  const eMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div
      className="dropdown w-40 text-center "
      onMouseEnter={eMouseEnter}
      onMouseLeave={eMouseLeave}
    >
      <button className="dorpdown-toggle">{name}</button>
      {isOpen && (
        <ul>
          <li className="dropdown-item bg-slate-600 rounded-lg my-2">1</li>
          <li className="dropdown-item bg-slate-600 rounded-lg my-2">2</li>
          <li className="dropdown-item bg-slate-600 rounded-lg my-2">3</li>
        </ul>
      )}
    </div>
  );
}
