import React from 'react';

const NavMenu = () => {
  return (
    <nav className="fixed top-0 left-0 h-full w-60 bg-black bg-opacity-25 transition-width duration-50 hover:w-180 overflow-visible z-10 pt-10">
      <ul>
        <li className="relative block w-180">
          <a href="#" className="flex items-center justify-center text-gray-500 hover:text-white hover:bg-blue-500">
            <i className="fa fa-home nav-icon text-xl"></i>
            <span className="nav-text ml-2">Home</span>
          </a>
        </li>

        <li className="relative block w-180">
          <a href="#" className="flex items-center justify-center text-gray-500 hover:text-white hover:bg-blue-500">
            <i className="fa fa-image nav-icon text-xl"></i>
            <span className="nav-text ml-2">Gallery</span>
          </a>
        </li>

        <li className="relative block w-180">
          <a href="#" className="flex items-center justify-center text-gray-500 hover:text-white hover:bg-blue-500">
            <i className="fa fa-pen nav-icon text-xl"></i>
            <span className="nav-text ml-2">Blog</span>
          </a>
        </li>

        <li className="relative block w-180">
          <a href="#" className="flex items-center justify-center text-gray-500 hover:text-white hover:bg-blue-500">
            <i className="fa fa-envelope nav-icon text-xl"></i>
            <span className="nav-text ml-2">Messages</span>
          </a>
        </li>

        <li className="relative block w-180">
          <a href="#" className="flex items-center justify-center text-gray-500 hover:text-white hover:bg-blue-500">
            <i className="fa fa-bell nav-icon text-xl"></i>
            <span className="nav-text ml-2">Notification</span>
          </a>
        </li>
      </ul>

      <ul className="absolute left-0 bottom-0">
        <li className="relative block w-180">
          <a href="#" className="flex items-center justify-center text-gray-500 hover:text-white hover:bg-blue-500">
            <i className="fa fa-cogs nav-icon text-xl"></i>
            <span className="nav-text ml-2">Settings</span>
          </a>
        </li>

        <li className="relative block w-180">
          <a href="#" className="flex items-center justify-center text-gray-500 hover:text-white hover:bg-blue-500">
            <i className="fa fa-right-from-bracket nav-icon text-xl"></i>
            <span className="nav-text ml-2">Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
