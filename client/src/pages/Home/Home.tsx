import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { TiArrowSortedDown } from "react-icons/ti";
import { BiSort } from "react-icons/bi";
import { FaPen } from "react-icons/fa";
import { FaCircleArrowUp } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { IoIosMail } from "react-icons/io";
import { CiFilter } from "react-icons/ci";

type Props = {};

const Home = (props: Props) => {
  const heading = [
    { name: "request name", icon: <CiFilter /> },
    { name: "Created date", icon: <BiSort /> },
    { name: "plan", icon: <CiFilter /> },
    { name: "scheduled date", icon: <BiSort /> },
    { name: "request status", icon: <CiFilter /> },
    { name: "Action", icon: "" },
  ];
  return (
    <div className=" w-full h-full">
      <Navbar />
      <section className=" w-full h-auto py-5 flex justify-center items-center">
        <table>
          <thead>
            <tr>
              <th className="border border-black px-4 bg-primary text-nowrap py-4"></th>
              {heading.map((data) => {
                return (
                  <th className=" capitalize bg-primary border border-black px-3 text-nowrap py-3">
                    <p className=" flex items-center justify-center gap-x-3">
                      {data.name} <span>{data.icon}</span>
                    </p>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className=" border w-5    border-black ">
                <div className="flex items-center justify-center">
                  <p className=" bg-gray-400 ">
                    <TiArrowSortedDown />
                  </p>
                </div>
              </td>
              <td className=" border border-black"></td>
              <td className=" border border-black"></td>
              <td className=" border border-black"></td>
              <td className=" border border-black"></td>
              <td className=" border border-black"></td>
              <td className=" border border-black   ">
                <div className="gap-x-7 py-4 px-4 flex text-xl ">
                  <p>
                    <FaPen />
                  </p>
                  <p>
                    <FaCircleArrowUp />
                  </p>
                  <p>
                    <GoDownload />
                  </p>
                  <p>
                    <IoIosMail />
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Home;
