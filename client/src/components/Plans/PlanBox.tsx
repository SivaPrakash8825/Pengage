import React from "react";
import Button from "../Button";
import { PlansData } from "../../data/PlansData";

type Props = {
  keyy: number;
  plan: (typeof PlansData)[0];
};

const PlanBox = ({ keyy, plan }: Props) => {
  console.log(keyy);

  return (
    <div
      key={keyy}
      className="relative w-[20rem] py-5 border-2 flex flex-col gap-4 rounded-lg border-black "
    >
      <div className="absolute pentagon h-[7.5rem] text-2xl  text-center w-[110%] bg-[#202161] text-white font-semibold -translate-x-[5%]  -top-5">
        <h1 className=" text-center mt-4">
          {plan.name} <br /> Plan
        </h1>
      </div>

      <ul className="pl-8 mt-24 ">
        {plan.details.map((detail, i) => {
          return <li className="list-disc">{detail}</li>;
        })}
      </ul>
      <div>
        <Button
          text="Free"
          onClick={() => console.log("dfg")}
          className="bg-[#FFF800] w-[110%] uppercase -translate-x-[5%] text-2xl font-semibold text-black border-none"
        />
      </div>
      <div className="flex justify-center">
        <Button
          text="Buy now"
          onClick={() => console.log("dfg")}
          className=""
        />
      </div>
      <div>
        <h1 className="text-center font-semibold uppercase">Test Coverage</h1>
        <ul className="pl-8 mt-3">
          {plan.coverages.map((coverage, i) => {
            return <li className="list-disc">{coverage}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default PlanBox;
