import React from "react";
import Image from "next/image";
import newspaper from "../../../assets/newspaper.png";

function Header() {
  return (
    <header className="flex w-full mx-auto rounded-b-lg bg-gray-900 relative justify-between text-center p-4">
      <h1 className="text-white">
        <span className="inline-block"><Image src={newspaper} height={48} width={48} alt=""/></span>
        NEWSROOM 101
      </h1>
    </header>
  );
}

export default Header;
