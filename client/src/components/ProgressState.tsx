import React from "react";

type Props = {
  step: number;
};

const ProgressState = ({ step }: Props) => {
  return (
    <div>
      <div className=" flex w-96">
        {/* round */}
        <div className="w-5 flex-shrink-0 h-5 bg-blue-800 relative rounded-full">
          <p className=" absolute -translate-x-1/2 left-1/2 top-6 font-semibold text-xs">
            Account Details
          </p>
        </div>
        <div
          className={`${step >= 2 ? "*:bg-blue-800" : "*:bg-gray-400"} flex-1 flex items-center `}
        >
          <div className="w-full h-1   "></div>
          <div className="w-5 h-5 flex-shrink-0  relative rounded-full">
            <p className=" absolute -translate-x-1/2 left-1/2 top-6 font-semibold text-xs">
              OTP Verificaion
            </p>
          </div>
        </div>
        <div
          className={`${step == 3 ? "*:bg-blue-800" : "*:bg-gray-400"} flex-1 flex items-center `}
        >
          <div className="w-full h-1 "></div>
          <div className="w-5 h-5  relative rounded-full">
            <p className=" absolute -translate-x-1/2 left-1/2 top-6 font-semibold text-xs">
              Set Password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressState;
