import React from "react";
import Image from "next/image";
import bitians from "../../../assets/bitians.png";

function Header() {
  return (
    <header className="bg-gray-800 py-4 mb-2 rounded-b-xl shadow">
    <h1 className="text-white text-center text-3xl font-semibold">
      <Image
        src={bitians}
        height={40}
        width={40}
        alt="noting"
        className="inline-block mr-2"
      />
      BITIANS
    </h1>
  </header>

  
  
  
  
  
  );
}

export default Header;
