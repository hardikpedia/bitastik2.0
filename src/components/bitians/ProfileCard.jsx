import link from "../../../assets/link.png";
import insta from "../../../assets/insta.png";
import git from "../../../assets/git.png";
import whatsapp from "../../../assets/whatsapp.png";
import gmail from "../../../assets/gmail.png";
import profile from "../../../assets/shinchan.jpg";
import Image from "next/image";
import React from "react";


function ProfileCard({ info }) {
  return (
    <main
      className="flex flex-col relative w-3/4 mt-8 "
    >
      <div className="absolute bottom-0 right-0 rounded-10px bg-white shadow-lg w-[calc(100%-50px)] h-[calc(100%-60px)] z-[-1]"></div>
      <section className="flex flex-row items-stretch w-full">
 
        <aside className="w-3/5 h-full flex-none md:w-2/4 relative border rounded-xl bg-cover bg-center">

        
          <Image
            src={profile}
            width={450}
            height={500}
            alt="undefined"
            className="object-cover"
          />
        <div className="absolute top-0 left-0 w-full h-full rounded-10px bg-red-500 opacity-80 mix-blend-screen"></div>
       
      
        </aside>

        <section className="mt-32 px-8 py-20 relative">
       
        <h1 className="text-5xl -left-16 -top-32 font-semibold m-3 absolute text-gray-700" style={{ WebkitTextStroke: "1px #f63d47" }}>
  Akshay
</h1>

<h2 className="text-base font-semibold tracking-widest mt-0 mb-5">{info.branch}</h2>

          <h2 className="text-xl font-bold mt-2 mb-1">ABOUT</h2>
          <p className="text-sm ">{info.bio}</p>
          <aside className="flex mt-3 space-x-3">
            <a href="#" target="_blank" className="mt-7 text-lg flex-auto text-center p-1 m-1 hover:text-shadow-md">
              <span className="w-4 h-4">
                <Image src={link} height={24} width={24} alt="" />
              </span>
            </a>
            <a href="#" target="_blank" className="mt-7 text-lg flex-auto text-center p-1 m-1 hover:text-shadow-md">
              <span className="w-4 h-4">
                <Image src={insta} height={24} width={24} alt="" />
              </span>
            </a>
            <a href="#" target="_blank" className="mt-7 text-lg flex-auto text-center p-1 m-1 hover:text-shadow-md">
              <span className="w-4 h-4">
                <Image src={git} height={24} width={24} alt="" />
              </span>
            </a>
            <a href="#" target="_blank" className="mt-7 text-lg flex-auto text-center p-1 m-1 hover:text-shadow-md">
              <span className="w-4 h-4">
                <Image src={whatsapp} height={24} width={24} alt="" />
              </span>
            </a>
            <a href="#" target="_blank" className="mt-7 text-lg flex-auto text-center p-1 m-1 hover:text-shadow-md">
              <span className="w-4 h-4">
                <Image src={gmail} height={24} width={24} alt="" />
              </span>
            </a>
          </aside>
        </section>
      </section>
      <section className="mx-2.5 my-2.5 leading-10 flex flex-row items-center">
        <p className="m-3 flex-auto bg-red-500 rounded-lg text-white pl-1">
          Hostel
          <strong className="text-black font-semibold ml-2 bg-white rounded-md px-2 py-1">
            {info.hostel}
          </strong>
        </p>
        <p className="m-3 flex-auto bg-red-500 rounded-lg text-white pl-1">
          Room
          <strong className="text-black font-semibold ml-2 bg-white rounded-md px-2 py-1">
            {info.room}
          </strong>
        </p>
        <p className="m-3 flex-auto bg-red-500 rounded-lg text-white pl-1">
          Year of Graduation
          <strong className="text-black font-semibold ml-2 bg-white rounded-md px-2 py-1">
            {info.yearofgraduation}
          </strong>
        </p>
      </section>
    </main>
    // <main className="profile relative max-h-96 max-w-96 mt-8 flex flex-col">
    //   <div className="profileBg absolute bottom-0 right-0 rounded-lg bg-white shadow-lg w-[calc(100%-75px)] h-[calc(100%-110px)] z-[-1]"></div>
    //   <section className="container flex flex-row items-stretch w-full">
    //     <aside
    //       className="profileImage animation-loadProfileImage relative rounded-lg w-45% flex-none bg-cover bg-center"
    //       style={{ backgroundImage: `url(${info.image || profile})` }}
    //     >
    //       <div className="image w-full h-full overflow-hidden relative">
    //         <div className="profileImage::before absolute w-full h-full rounded-lg bg-[#ff2256] opacity-80 mix-blend-screen"></div>
    //         <span className="camera absolute bottom-4 left-4 text-white text-lg"></span>
    //       </div>
    //     </aside>
    //     <section className="profileInfo mt-32 p-8% pt-2% relative">
    //       <h1 className="firstName text-3xl font-semibold absolute -left-80 top-[-115px] text-[#000000] -webkit-text-stroke-1px-[#f63d47]">
    //         {info.username}
    //       </h1>
    //       <h2 className="secondName animation-titleEffect absolute -left-80 top-[-115px]">
    //         {info.branch}
    //       </h2>
    //       <h2 className="text-1rem font-semibold tracking-wider mt-0 mb-5%">
    //         ABOUT
    //       </h2>
    //       <p>{info.bio}</p>
    //       <aside className="socialMediaIcons flex">
    //         <a
    //           href="#"
    //           target="_blank"
    //           className="hover:text-shadow-[0px 5px 15px rgba(255, 0, 47, 0.45)]"
    //         >
    //           <span>
    //             <Image src={link} height={24} width={24} alt="" />
    //           </span>
    //         </a>
    //         <a
    //           href="#"
    //           target="_blank"
    //           className="hover:text-shadow-[0px 5px 15px rgba(255, 0, 47, 0.45)]"
    //         >
    //           <span>
    //             <Image src={insta} height={24} width={24} alt="" />
    //           </span>
    //         </a>
    //         <a
    //           href="#"
    //           target="_blank"
    //           className="hover:text-shadow-[0px 5px 15px rgba(255, 0, 47, 0.45)]"
    //         >
    //           <span>
    //             <Image src={git} height={24} width={24} alt="" />
    //           </span>
    //         </a>
    //         <a
    //           href="#"
    //           target="_blank"
    //           className="hover:text-shadow-[0px 5px 15px rgba(255, 0, 47, 0.45)]"
    //         >
    //           <span>
    //             <Image src={whatsapp} height={24} width={24} alt="" />
    //           </span>
    //         </a>
    //         <a
    //           href="#"
    //           target="_blank"
    //           className="hover:text-shadow-[0px 5px 15px rgba(255, 0, 47, 0.45)]"
    //         >
    //           <span>
    //             <Image src={gmail} height={24} width={24} alt="" />
    //           </span>
    //         </a>
    //       </aside>
    //     </section>
    //   </section>
    //   <section className="statistics ml-10 mr-10 flex flex-row items-center">
    //     <p className="mr-3% flex-auto">
    //       Hostel<strong>{info.hostel}</strong>
    //     </p>
    //     <p className="mr-3% flex-auto">
    //       Room<strong>{info.room}</strong>
    //     </p>
    //     <p className="flex-auto">
    //       Year of Graduation<strong>{info.yearofgraduation}</strong>
    //     </p>
    //   </section>
    // </main>
  );
}

export default ProfileCard;
