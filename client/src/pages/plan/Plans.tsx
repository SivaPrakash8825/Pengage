import React from "react";
import Navbar from "../../components/Navbar";
import PlanBox from "../../components/Plans/PlanBox";

const Plans = () => {
  console.log("Plans rendered");

  return (
    <div>
      <Navbar />
      <div className="h-[calc(100vh-6rem)] w-full bg-background">
        <h1 className="text-4xl font-[600] text-center">
          Web Penetration <br /> Testing Plans
        </h1>
        <div className="flex gap-12 justify-center mt-10">
          {[1, 2, 3].map((plan) => (
            <PlanBox />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
