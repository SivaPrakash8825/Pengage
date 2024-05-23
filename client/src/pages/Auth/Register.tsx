import React, { useState } from "react";
import Image from "../../assets/react.svg";
import InputField from "../../components/InputField";
import ProgressState from "../../components/ProgressState";
import Button from "../../components/Button";

type Props = {};

const Register = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-4/6 flex overflow-hidden rounded-md shadow-xl bg-white">
      <section className=" text-white text-center px-5 flex flex-col justify-center items-center gap-y-3 w-[35%] bg-[#5356FF]">
        <img src={Image} className=" w-1/2 h-auto" alt="" />
        <h1 className=" text-3xl tracking-widest font-bold">
          QuarkSek <br /> Technologies
        </h1>
        <p className="text-[1.2rem]">
          {" "}
          Testing the strength of defenses to fortify security
        </p>
      </section>
      <section className=" flex-1 flex  flex-col gap-8 justify-center items-center text-center py-20">
        <ProgressState />
        {/* heading */}
        <div className="   flex flex-col">
          <h1 className=" capitalize text-[2rem] font-black tracking-wider text-blue-600">
            sign up
          </h1>
        </div>
        {/* inputs */}
        <div className=" w-2/3">
          <div className="flex flex-col gap-y-10">
            <InputField
              label="Full Name"
              warning="Enter the valid email ID"
              value={email}
              setValue={setEmail}
              regex={/^[a-z0-9]+@[a-z]+\.[a-z]+$/}
            />
            <InputField
              label="Email ID"
              warning="Email ID"
              value={password}
              setValue={setPassword}
              regex={/^[^s@]+@[^s@]+.[^s@]+$/}
            />
            <InputField
              label="Phone Number"
              warning="password"
              value={password}
              setValue={setPassword}
              regex={/^[^s@]+@[^s@]+.[^s@]+$/}
            />
          </div>
          <p className=" capitalize text-right text-sm">forget password?</p>
        </div>
        <Button text="sign in" onClick={() => console.log("sign in")} />
        <p>
          Already have an account ?{" "}
          <span className=" text-blue-700">Sign In</span>
        </p>
      </section>
    </div>
  );
};

export default Register;
