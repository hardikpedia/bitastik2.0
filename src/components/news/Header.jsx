import React from "react";
import Image from "next/image";
import newspaper from "../../../assets/newspaper.png";

function Header() {
  return (
    <div className="flex w-full mx-auto rounded-b-lg bg-white-100 justify-between text-center p-4">
      <h1 className="text-primary text-xl font-semibold">
        <span className="inline-block"><Image src={newspaper} height={48} width={48} alt=""/></span>
        NEWSROOM 101
      </h1>
    </div>
  );
}

export default Header;
