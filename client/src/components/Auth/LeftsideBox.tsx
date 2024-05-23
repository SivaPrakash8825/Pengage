import React from 'react'
import Image from "../../assets/logo.png";
type Props = {}

const LeftsideBox = (props: Props) => {
  return (
    <section className=" text-white text-center px-5 flex flex-col justify-center items-center gap-y-3 w-[35%] bg-blue-700">
        <img src={Image} className="w-2/5 h-auto object-contain" alt="" />
        <div className="borde border-red-500 w-10/12">
          <h1 className=" text-4xl tracking-widest font-semibold">
            QuarkSek <br /> Technologies
          </h1>
          <p className="text-2xl mt-6">
            {" "}
            Testing the strength of defenses to fortify security
          </p>
        </div>
      </section>
  )
}

export default LeftsideBox