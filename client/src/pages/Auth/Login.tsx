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
    <div className="flex w-4/6 overflow-hidden rounded-md bg-white shadow-xl">
      <LeftsideBox />
      <section className=" flex flex-1  flex-col items-center justify-center gap-8 py-20 text-center">
        {/* heading */}
        <div className="   mb-5 flex flex-col gap-y-3">
          <h1 className="  text-[2rem] font-[700]  text-[#5356FF]">
            Welcome to Pengage
          </h1>
          <h1 className=" text-tex text-[1.5rem] font-[700] ">
            Sign in to continue
          </h1>
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
          <Link to={""} className="block text-right text-sm capitalize">
            forget password?
          </Link>
        </div>
        <Button text="sign in" onClick={() => console.log("sign in")} />
        <p>
          New User?{"    "}
          <Link to={"/register"} className="ml-2 font-semibold text-blue-700">
            SIGN UP NOW
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Login;
