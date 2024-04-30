import InputField from "../../components/InputField";
import Image from "../../assets/react.svg";
import { useState } from "react";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-4/6 flex overflow-hidden rounded-md shadow-xl bg-white">
      <section className=" text-white text-center px-5 flex flex-col justify-center items-center gap-y-3 w-[35%] bg-blue-700">
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
        {/* heading */}
        <div className="   flex flex-col mb-5 ">
          <h1 className=" capitalize text-[2rem] font-black tracking-wider text-blue-600">
            welcome back
          </h1>
          <h1 className="capitalize font-bold text-[1.5rem]">
            sign in to continue
          </h1>
        </div>
        {/* inputs */}
        <div className=" w-2/3">
          <div className="flex flex-col gap-y-8">
            <InputField
              label="Email ID"
              warning="Enter the valid email ID"
              value={email}
              setValue={setEmail}
              regex={/^[a-z0-9]+@[a-z]+\.[a-z]+$/}
            />
            <InputField
              label="Password"
              warning="Fill the password"
              value={password}
              setValue={setPassword}
              regex={/^[^s@]+@[^s@]+.[^s@]+$/}
            />
          </div>
          <p className=" capitalize text-right text-sm">forget password?</p>
        </div>
        <button className=" capitalize rounded-md bg-blue-700 py-1 px-7 text-white">
          sign in
        </button>
        <p>
          New User ? <span className=" text-blue-700">SIGN UP NOW</span>
        </p>
      </section>
    </div>
  );
};

export default Login;
