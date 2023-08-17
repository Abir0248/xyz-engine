import { useState } from "react";
import { Link } from "react-router-dom"; // if you're using react-router
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="w-full bg-lightgray  mx-auto flex py-6 justify-between items-center navbar p-4">
      <div className="text-3xl font-bold hover:text-blue-600 cursor-pointer">
        XYZ Company
      </div>

      <AiOutlineMenu className="text-2xl md:hidden block hover:text-blue-600 cursor-pointer" />
      {/* <AiOutlineClose className="text-2xl md:hidden block hover:text-blue-600 cursor-pointer" /> */}

      <ul className="list-none md:flex hidden justify-end items-center flex-1 space-x-6">
        <li className="hover:text-blue-600 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          <Link to="/">Resources</Link>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          <Link to="/">Projects</Link>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          <Link to="/">About</Link>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          <Link to="/">Log Out</Link>
        </li>
      </ul>
      {/* Responsive */}
      <ul className="list-none md:hidden w-full fixed bg-lightgray left-12 top-[83px]">
        <li className="hover:text-blue-600 cursor-pointer p-3">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-blue-600 cursor-pointer p-3">
          <Link to="/">Resources</Link>
        </li>
        <li className="hover:text-blue-600 cursor-pointer p-3">
          <Link to="/">Projects</Link>
        </li>
        <li className="hover:text-blue-600 cursor-pointer p-3">
          <Link to="/">About</Link>
        </li>
        <li className="hover:text-blue-600 cursor-pointer p-3">
          <Link to="/">Log Out</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
