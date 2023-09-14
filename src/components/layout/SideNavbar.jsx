import { Disclosure } from "@headlessui/react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PeopleIcon from "@mui/icons-material/People";
import ForumIcon from "@mui/icons-material/Forum";
import EditIcon from "@mui/icons-material/Edit";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
function SideNavbar() {
  const router = useRouter();
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  //   console.log('====================================');
  //   console.log(isOpen);
  //   console.log('====================================');
  // };
  const handleSignOut = async () => {
    signOut();
    router.push("/bitians");
  };
  // return (
  //   <div>
  //     <Disclosure as="nav">
  //       <Disclosure.Button
  //        onClick={toggleMenu}
  //         className="absolute left-4 z-100 inline-flex items-center peer justify-center rounded-md p-2 text-white hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group"
  //       >
  //          {isOpen ? (
      
  //         <CloseIcon className="block h-6 w-6 lg:hidden" aria-hidden="true" />
  //       ) : (
  //         <MenuIcon className="block h-6 w-6 lg:hidden" aria-hidden="true" />
  //       )}
  //       </Disclosure.Button>

  //       <div className="p-6 w-1/2 h-screen bg-black z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200 sm:opacity-60  text-white opacity-75">
  //         <div className="flex flex-col justify-start item-center">
  //           <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
  //             BITASTIK
  //           </h1>
  //           <div className=" my-4 border-b border-gray-100 pb-4">
  //             <div
  //               className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
  //               onClick={() => {
  //                 router.push("/dashboard");
  //               }}
  //             >
  //               <AccountCircleIcon className="text-2xl text-gray-600 group-hover:text-white " />
  //               <h3 className="text-base text-white group-hover:text-white font-semibold ">
  //                 Dashboard
  //               </h3>
  //             </div>
  //             <div
  //               className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
  //               onClick={() => {
  //                 router.push("/bitians");
  //               }}
  //             >
  //               <PeopleIcon className="text-2xl text-gray-600 group-hover:text-white " />
  //               <h3 className="text-base text-white group-hover:text-white font-semibold ">
  //                 Bitians
  //               </h3>
  //             </div>
  //             <div
  //               className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
  //               onClick={() => {
  //                 router.push("/confessions");
  //               }}
  //             >
  //               <ForumIcon className="text-2xl text-gray-600 group-hover:text-white " />
  //               <h3 className="text-base text-white group-hover:text-white font-semibold ">
  //                 Confessions
  //               </h3>
  //             </div>
  //             <div
  //               className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
  //               onClick={() => {
  //                 router.push("/newsroom");
  //               }}
  //             >
  //               <ArticleIcon className="text-2xl text-gray-600 group-hover:text-white " />
  //               <h3 className="text-base text-white group-hover:text-white font-semibold ">
  //                 Newsroom
  //               </h3>
  //             </div>
  //             <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
  //               <EventIcon className="text-2xl text-gray-600 group-hover:text-white " />
  //               <h3 className="text-base text-white group-hover:text-white font-semibold ">
  //                 Calendar
  //               </h3>
  //             </div>
  //             <div
  //               className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
  //               onClick={() => {
  //                 router.push("/notes");
  //               }}
  //             >
  //               <PlaylistAddCheckIcon className="text-2xl text-gray-600 group-hover:text-white " />
  //               <h3 className="text-base text-white group-hover:text-white font-semibold ">
  //                 Todolist
  //               </h3>
  //             </div>
  //             <div
  //               className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
  //               onClick={() => {
  //                 router.push("/whiteboard");
  //               }}
  //             >
  //               <EditIcon className="text-2xl text-gray-600 group-hover:text-white " />
  //               <h3 className="text-base text-white group-hover:text-white font-semibold ">
  //                 Whiteboard
  //               </h3>
  //             </div>
  //           </div>
  //           <div className=" my-4" onClick={handleSignOut}>
  //             <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
  //               <ExitToAppIcon className="text-2xl text-gray-600 group-hover:text-white " />
  //               <h3 className="text-base text-white group-hover:text-white font-semibold ">
  //                 Logout
  //               </h3>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </Disclosure>
  //   </div>
  // );

  const menus = [
    { name: "dashboard", icon: AccountCircleIcon },
    { name: "bitians", icon: PeopleIcon },
    { name: "confessions", icon: ForumIcon },
    { name: "newsroom", icon: ArticleIcon},
    { name: "calendar", icon: EventIcon },
    { name: "todolist", icon: PlaylistAddCheckIcon },
    { name: "whiteboard", icon: EditIcon },
    { name: "logout", icon: ExitToAppIcon,margin:true},
    
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed"> 
    <section className="gap-6 min-h-screen border-r-2 z-100">
      <div
        className={`bg-primary ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4 bg-opacity-30`}
      >
        <div className="py-3 flex justify-end">
          <MenuOutlinedIcon
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-6 relative">
          {menus?.map((menu, i) => (
            <div
            onClick={() => {
              if (menu.name === 'logout') {
                handleSignOut();
              } else {
                router.push(`/${menu.name}`);
              }
            }}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </div>
          ))}

        </div>
      </div>
      
    </section>
    </div>
  );
}

export default SideNavbar;
