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
import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
function SideNavbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleSignOut = () => {
    signOut();
    router.push("/");
  };
  return (
    <div>
      <Disclosure as="nav">
        <Disclosure.Button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute left-4 z-100 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group"
        >
          <MenuIcon className="block lg:hidden h-6 w-6" aria-hidden="true" />
        </Disclosure.Button>

        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
  
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
              BITASTIK
            </h1>
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div
                className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
                onClick={() => {
                  router.push("/dashboard");
                }}
              >
                <AccountCircleIcon className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Dashboard
                </h3>
              </div>
              <div
                className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
                onClick={() => {
                  router.push("/bitians");
                }}
              >
                <PeopleIcon className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Bitians
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"  onClick={() => {
                    router.push("/confessions");
                  }}>
                <ForumIcon className="text-2xl text-gray-600 group-hover:text-white " />
                <h3
                  className="text-base text-gray-800 group-hover:text-white font-semibold "
                 
                >
                  Confessions
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"  onClick={() => {
                    router.push("/newsroom");
                  }}>
                <ArticleIcon className="text-2xl text-gray-600 group-hover:text-white " />
                <h3
                  className="text-base text-gray-800 group-hover:text-white font-semibold "
                 
                >
                  Newsroom
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <EventIcon className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Calendar
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"     onClick={() => {
                    router.push("/notes");
                  }}>
                <PlaylistAddCheckIcon className="text-2xl text-gray-600 group-hover:text-white " />
                <h3
                  className="text-base text-gray-800 group-hover:text-white font-semibold "
              
                >
                  Todolist
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"  onClick={() => {
                    router.push("/whiteboard");
                  }}>
                <EditIcon className="text-2xl text-gray-600 group-hover:text-white " />
                <h3
                  className="text-base text-gray-800 group-hover:text-white font-semibold "
                 
                >
                  Whiteboard
                </h3>
              </div>
            </div>
            {/* setting  */}
            {/* <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Settings
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  More
                </h3>
              </div>
            </div> */}
            {/* logout */}
            <div className=" my-4" onClick={handleSignOut}>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <ExitToAppIcon className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Logout
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
