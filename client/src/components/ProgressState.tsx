import React from "react";

type Props = {};

const ProgressState = (props: Props) => {
  return (
    <div>
      <div className=" flex w-96">
        {/* round */}
        <div className=" flex-1 flex items-center ">
          <div className="w-5 flex-shrink-0 h-5 bg-blue-800 relative rounded-full">
            <p className=" absolute -translate-x-1/2 left-1/2 top-5 font-bold text-[9px]">
              Account details
            </p>
          </div>
          <div className="w-full h-1 bg-gray-400  "></div>
        </div>
        <div className=" flex-1 flex items-center ">
          <div className="w-5 h-5 flex-shrink-0 bg-gray-400  relative rounded-full">
            <p className=" absolute -translate-x-1/2 left-1/2 top-5 font-bold text-[9px]">
              OTP Verificaion
            </p>
          </div>
          <div className="w-full h-1 bg-gray-400 "></div>
        </div>
        <div className=" flex items-center ">
          <div className="w-5 h-5 bg-gray-400  relative rounded-full">
            <p className=" absolute -translate-x-1/2 left-1/2 top-5 font-bold text-[9px]">
              set password
            </p>
          </div>
          {/* <div className="w-full h-1 bg-blue-800 "></div> */}
        </div>
      </div>
    </div>
  );
};

export default ProgressState;
