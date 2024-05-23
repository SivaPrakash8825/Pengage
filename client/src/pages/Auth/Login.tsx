import InputField from "../../components/InputField";

import { useState } from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import LeftsideBox from "../../components/Auth/LeftsideBox";

type Props = {};

const Login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-4/6 flex overflow-hidden rounded-md shadow-xl bg-white">
      <LeftsideBox />
      <section className=" flex-1 flex  flex-col gap-8 justify-center items-center text-center py-20">
        {/* heading */}
        <div className="   flex flex-col mb-5 gap-y-3">
          <h1 className="  text-[2rem] font-[700]  text-[#5356FF]">
            Welcome to Pengage
          </h1>
          <h1 className=" font-[700] text-[1.5rem]">Sign in to continue</h1>
        </div>
        {/* inputs */}
        <div className=" w-2/3">
          <div className="flex flex-col gap-y-10">
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
          <Link to={""} className="block capitalize text-right text-sm">
            forget password?
          </Link>
        </div>
        <Button text="sign in" onClick={() => console.log("sign in")} />
        <p>
          New User?{"    "}
          <Link to={"/register"} className="ml-2 text-blue-700 font-semibold">SIGN UP NOW</Link>
        </p>
      </section>
    </div>
  );
};

export default Login;
