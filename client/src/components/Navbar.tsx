import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../assets/logoWithName.png";

type Props = {};

const Navbar = (props: Props) => {
  console.log("Navbar rendered");

  return (
    <div className="bg-background h-[6rem] flex justify-around items-center border-b-gray-400 border-b-2 shadow shadow-gray-300">
      <div>
        <img src={Logo} className="w-[16rem]" alt="Logo" />
      </div>
      <div className="text-secondary text-3xl font-bold tracking-wide">
        <h1>Pengage</h1>
      </div>
      <div className="flex items-center gap-10 text-secondary">
        <div>
          <IoNotificationsOutline size={22} />
        </div>
        <div className="flex items-center gap-1">
          <div>
            <FaUserCircle size={22} />
          </div>
          <h1 className="font-semibold text-lg text-black">User name</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
