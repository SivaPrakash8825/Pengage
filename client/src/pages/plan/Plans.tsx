import React from "react";
import Navbar from "../../components/Navbar";
import PlanBox from "../../components/Plans/PlanBox";
import { PlansData } from "../../data/PlansData";

const Plans = () => {
  console.log("Plans rendered");

  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-6rem)] py-5 w-full bg-background">
        <h1 className="text-4xl  font-[600] text-center">
          Web Penetration <br /> Testing Plans
        </h1>
        <div className="flex gap-12 justify-center mt-14">
          {PlansData.map((plan, index) => (
            <PlanBox keyy={index} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
