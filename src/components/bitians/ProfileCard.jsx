// import link from "../../../assets/link.png";
// import insta from "../../../assets/insta.png";
// import git from "../../../assets/git.png";
// import whatsapp from "../../../assets/whatsapp.png";
// import gmail from "../../../assets/gmail.png";
// import profile from "../../../assets/shinchan.jpg";
// import Image from "next/image";
// function ProfileCard({ info}) {


//   return (
//     <main
//       className={`relative flex flex-col max-h-96 max-w-lg mx-auto mt-8 p-2 bg-gray-100 rounded-lg shadow-lg `}
//     >
//       <div className="absolute bottom-0 right-0 rounded-10px bg-white shadow-lg w-[calc(100%-50px)] h-[calc(100%-60px)] z-[-1]"></div>
//       <section className="flex w-full">
//         <aside className="relative w-40">
//           <div className="absolute top-0 left-0 text-[#57595D] text-xl font-semibold animate-titleEffect">
//             <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded">
//               {info.branch}
//             </span>
//           </div>
//           <Image
//             src={profile}
//             width={350}
//             height={400}
//             alt="undefined"
//             objectFit="cover"
//           />
//           <div className="absolute bottom-0 left-0 text-3xl font-semibold animate-titleEffect">
//             <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded">
//               Akshay
//             </span>
//           </div>
//         </aside>
//         <section className="flex-1 mt-8 p-4 relative">
//           <h2 className="text-xl font-bold mt-2 mb-1">ABOUT</h2>
//           <p className="text-sm">
//           {info.bio}
//           </p>
//           <aside className="flex mt-3 space-x-3">
//             <a href="#" target="_blank">
//               <span className="w-4 h-4">
//                 <Image src={link} height={20} width={20} alt="" />
//               </span>
//             </a>
//             <a href="#" target="_blank">
//               <span className="w-4 h-4">
//                 <Image src={insta} height={20} width={20} alt="" />
//               </span>
//             </a>
//             <a href="#" target="_blank">
//               <span className="w-4 h-4">
//                 <Image src={git} height={20} width={20} alt="" />
//               </span>
//             </a>
//             <a href="#" target="_blank">
//               <span className="w-4 h-4">
//                 <Image src={whatsapp} height={20} width={20} alt="" />
//               </span>
//             </a>
//             <a href="#" target="_blank">
//               <span className="w-4 h-4">
//                 <Image src={gmail} height={20} width={20} alt="" />
//               </span>
//             </a>
//           </aside>
//         </section>
//       </section>
//       <section className="flex justify-between mt-3 space-x-3">
//         <p className="text-sm">
//           Hostel
//           <span className="text-black bg-[#f63d47] px-1 py-1 rounded-5px">
//             {info.hostel}
//           </span>
//         </p>
//         <p className="text-sm">
//           Room
//           <span className="text-black bg-[#f63d47] px-1 py-1 rounded-5px">
//             {info.room}
//           </span>
//         </p>
//         <p className="text-sm">
//           Year of Graduation
//           <span className="text-black bg-[#f63d47] px-1 py-1 rounded-5px">
//             {info.yearofgraduation}
//           </span>
//         </p>
//       </section>
//     </main>
//   );
// }

// export default ProfileCard;

// import link from "../../../assets/link.png";
// import insta from "../../../assets/insta.png";
// import git from "../../../assets/git.png";
// import whatsapp from "../../../assets/whatsapp.png";
// import gmail from "../../../assets/gmail.png";
// import profile from "../../../assets/shinchan.jpg";
// import Image from "next/image";
// import React from "react";

// function ProfileCard({ info }) {
//   return (
//     <main
//       className={`relative flex flex-col max-w-lg mx-auto mt-8 p-2 bg-gray-100 rounded-lg shadow-lg `}
//     >
//       <div className="absolute bottom-0 right-0 rounded-10px bg-white shadow-lg w-[calc(100%-50px)] h-[calc(100%-60px)] z-[-1]"></div>
//       <section className="flex flex-col md:flex-row md:items-start w-full">
//         <aside className="relative w-full md:w-40">
//           <div className="absolute top-0 left-0 text-[#57595D] text-xl font-semibold animate-titleEffect">
//             <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded">
//               {info.branch}
//             </span>
//           </div>
//           <Image
//             src={profile}
//             width={350}
//             height={400}
//             alt="undefined"
//             objectFit="cover"
//           />
//           <div className="absolute bottom-0 left-0 text-3xl font-semibold animate-titleEffect">
//             <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded">
//               Akshay
//             </span>
//           </div>
//         </aside>
//         <section className="flex-1 mt-4 md:mt-8 p-4 relative">
//           <h2 className="text-xl font-bold mt-2 mb-1">ABOUT</h2>
//           <div className="text-sm overflow-y-auto max-h-40">{info.bio}</div>
//           <aside className="flex mt-3 space-x-3">
//             {/* ... */}
//           </aside>
//         </section>
//       </section>
//       <section className="flex flex-col md:flex-row justify-between mt-3 md:mt-3 space-y-3 md:space-x-3">
//         <p className="text-sm">
//           Hostel
//           <span className="text-black bg-[#f63d47] px-1 py-1 rounded-5px">
//             {info.hostel}
//           </span>
//         </p>
//         <p className="text-sm">
//           Room
//           <span className="text-black bg-[#f63d47] px-1 py-1 rounded-5px">
//             {info.room}
//           </span>
//         </p>
//         <p className="text-sm">
//           Year of Graduation
//           <span className="text-black bg-[#f63d47] px-1 py-1 rounded-5px">
//             {info.yearofgraduation}
//           </span>
//         </p>
//       </section>
//     </main>
//   );
// }

// export default ProfileCard;


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
    <main className="relative max-w-lg mx-auto mt-8 p-2 bg-gray-100 rounded-lg shadow-lg ">
      <div className="absolute bottom-0 right-0 rounded-10px bg-white shadow-lg w-[calc(100%-50px)] h-[calc(100%-60px)] z-[-1]"></div>
      <section className="flex flex-col md:flex-row md:items-start w-full">
        <aside className="relative w-full md:w-40">
          <div className="absolute top-0 left-0 text-[#57595D] text-xl font-semibold animate-titleEffect">
            <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded">
              {info.branch}
            </span>
          </div>
          <Image
            src={profile}
            width={350}
            height={400}
            alt="undefined"
            objectFit="cover"
          />
          <div className="absolute bottom-0 left-0 text-3xl font-semibold animate-titleEffect">
            <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded">
              Akshay
            </span>
          </div>
        </aside>
        <section className="flex-1 mt-4 md:mt-8 p-4 relative">
          <h2 className="text-xl font-bold mt-2 mb-1">ABOUT</h2>
          <div className="text-sm max-h-10 overflow-auto">
              {info.bio}
            </div>
          <aside className="flex mt-3 space-x-3">
          <a href="#" target="_blank">
               <span className="w-4 h-4">
                <Image src={link} height={20} width={20} alt="" />
               </span>
             </a>
             <a href="#" target="_blank">
               <span className="w-4 h-4">
                 <Image src={insta} height={20} width={20} alt="" />
               </span>
             </a>
             <a href="#" target="_blank">
               <span className="w-4 h-4">
                 <Image src={git} height={20} width={20} alt="" />
               </span>
             </a>
             <a href="#" target="_blank">
               <span className="w-4 h-4">
                 <Image src={whatsapp} height={20} width={20} alt="" />
               </span>
             </a>
             <a href="#" target="_blank">
               <span className="w-4 h-4">
                 <Image src={gmail} height={20} width={20} alt="" />
               </span>
             </a>
          </aside>
        </section>
      </section>
      <section className="flex flex-col md:flex-row justify-between mt-3 md:mt-3 space-y-3 md:space-x-3">
        <p className="text-sm">
          Hostel
          <span className="text-black bg-[#f63d47] px-1 py-1 rounded-5px">
            {info.hostel}
          </span>
        </p>
        <p className="text-sm">
          Room
          <span className="text-black bg-[#f63d47] px-1 py-1 rounded-5px">
            {info.room}
          </span>
        </p>
        <p className="text-sm">
          Year of Graduation
          <span className="text-black bg-[#f63d47] px-1 py-1 rounded-5px">
            {info.yearofgraduation}
          </span>
        </p>
      </section>
    </main>
  );
}

export default ProfileCard;
