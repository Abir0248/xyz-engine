import { useState } from "react";
import { Link } from "react-router-dom"; // if you're using react-router
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full bg-lightgray  mx-auto flex py-6 justify-between items-center navbar p-4">
      <div className="text-3xl font-bold hover:text-blue-600 cursor-pointer">
        <Link to="/">XYZ Company</Link>
      </div>
      {toggle ? (
        <AiOutlineClose
          onClick={(O) => setToggle(!toggle)}
          className="text-2xl md:hidden block hover:text-blue-600 cursor-pointer"
        />
      ) : (
        <AiOutlineMenu
          onClick={(O) => setToggle(!toggle)}
          className="text-2xl md:hidden block hover:text-blue-600 cursor-pointer"
        />
      )}

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
      <ul
        className={`md:hidden duration-300  w-full  h-screen fixed bg-lightgray top-[83px]
        ${toggle ? "left-[0]" : "left-[-100%]"}  items-center`}
      >
        <li className="hover:text-blue-600 text-xl cursor-pointer p-5 text-center">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-blue-600 text-xl cursor-pointer p-5 text-center">
          <Link to="/">Resources</Link>
        </li>
        <li className="hover:text-blue-600 text-xl cursor-pointer p-5 text-center">
          <Link to="/">Projects</Link>
        </li>
        <li className="hover:text-blue-600 text-xl cursor-pointer p-5 text-center">
          <Link to="/">About</Link>
        </li>
        <li className="hover:text-blue-600 text-xl cursor-pointer p-5 text-center">
          <Link to="/">Log Out</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
