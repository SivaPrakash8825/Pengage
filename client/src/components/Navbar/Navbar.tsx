import React from "react";
import Logo from "/logo.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className=" w-full h-24 bg-bgClr shadow-sm shadow-black    flex items-center ">
      <div className="flex-1 flex items-center justify-center gap-x-2">
        <img src={Logo} className=" w-14 h-auto" alt="logo" />
        <div className=" capitalize text-2xl font-bold leading-7">
          <h1>
            <span className=" text-primary2">Quark</span>
            <span className=" text-error">Sek</span>
          </h1>
          <h1>Technologies</h1>
        </div>
      </div>
      <div className="flex-1 text-center">
        <h1 className=" text-3xl font-bold text-secondary">Pengage</h1>
      </div>
      <div className=" flex flex-1 items-center gap-x-10 justify-center text-secondary text-lg">
        <IoIosNotificationsOutline />
        <div className=" flex items-center gap-x-3 capitalize">
          <FaCircleUser />
          <p>user name</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
