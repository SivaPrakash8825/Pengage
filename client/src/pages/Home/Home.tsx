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
    <div className=" h-full w-full">
      <Navbar />
      <section className=" flex h-auto w-full items-center justify-center py-5">
        <table>
          <thead>
            <tr>
              <th className="text-nowrap border border-black bg-primary px-4 py-4"></th>
              {heading.map((data) => {
                return (
                  <th className=" text-nowrap border border-black bg-primary px-3 py-3 capitalize">
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
              <td className=" w-5 border    border-black ">
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
                <div className="flex gap-x-7 px-4 py-4 text-xl ">
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
            <tr className="">
              <td className=" w-5 border    border-black ">
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
                <div className="flex gap-x-7 px-4 py-4 text-xl ">
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
