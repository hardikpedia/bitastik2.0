import link from "../../../assets/link.png";
import insta from "../../../assets/insta.png";
import git from "../../../assets/git.png";
import whatsapp from "../../../assets/whatsapp.png";
import gmail from "../../../assets/gmail.png";
import profile from "../../../assets/shinchan.jpg";
import Image from "next/image";
import React from "react";

function ProfileCard({ info }) {
  const nameWords = info.name.split(" ");

  return (

    <section class="w-64 mx-8 my-2 bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg font-mono">
      <div class="flex items-center justify-between">
        <span class="text-gray-400 text-sm font-bold">{info.branch}</span>
      </div>
      <div class="mt-6 w-fit mx-auto">
        <Image
          src={profile}
          class="rounded-full w-28 h-28 "
          alt="profile picture"
          srcset=""
        />
      </div>

      <div class="mt-8">
        {nameWords.map((word, index) => (
          <h2 key={index} class="text-white font-bold text-2xl tracking-wide">
            {word}
          </h2>
        ))}
      </div>
      <p class="text-emerald-400 font-semibold mt-2.5 font-mono">
        Software engineeer at Microsoft ansd mACHINE lEARNING eNTHUSIAST
      </p>

      <aside className="flex mt-3 space-x-3">
        <a
          href="#"
          target="_blank"
          className="mt-7 text-lg flex-auto text-center p-1 m-1 hover:text-shadow-md"
        >
          <span className="w-4 h-4">
            <Image src={link} height={24} width={24} alt="" />
          </span>
        </a>
        <a
          href="#"
          target="_blank"
          className="mt-7 text-lg flex-auto text-center p-1 m-1 hover:text-shadow-md"
        >
          <span className="w-4 h-4">
            <Image src={insta} height={24} width={24} alt="" />
          </span>
        </a>
        <a
          href="#"
          target="_blank"
          className="mt-7 text-lg flex-auto text-center p-1 m-1 hover:text-shadow-md"
        >
          <span className="w-4 h-4">
            <Image src={git} height={24} width={24} alt="" />
          </span>
        </a>
        <a
          href="#"
          target="_blank"
          className="mt-7 text-lg flex-auto text-center p-1 m-1 hover:text-shadow-md"
        >
          <span className="w-4 h-4">
            <Image src={whatsapp} height={24} width={24} alt="" />
          </span>
        </a>
        <a
          href="#"
          target="_blank"
          className="mt-7 text-lg flex-auto text-center p-1 m-1 hover:text-shadow-md"
        >
          <span className="w-4 h-4">
            <Image src={gmail} height={24} width={24} alt="" />
          </span>
        </a>
      </aside>
      <div class="mt-3 text-white text-sm"></div>
    </section>
  );
}

export default ProfileCard;
