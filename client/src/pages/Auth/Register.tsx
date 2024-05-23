import React, { useState } from "react";
import Image from "../../assets/react.svg";
import InputField from "../../components/InputField";
import ProgressState from "../../components/ProgressState";
import Button from "../../components/Button";
import LeftsideBox from "../../components/Auth/LeftsideBox";

type Props = {};

const Register = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phnoPrefix, setPhnoPrefix] = useState("");
  const [phno, setPhno] = useState("");
  const [email, setEmail] = useState("");
  const [phnoOtp, setPhnoOtp] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState<number>(1);

  return (
    <div className="w-4/6 flex overflow-hidden rounded-md shadow-xl bg-white">
      <LeftsideBox />
      <section className=" flex-1 flex  flex-col gap-8 justify-center items-center text-center py-20">
        <ProgressState step={step} />
        {/* heading */}
        <div className=" flex flex-col">
          <h1 className="mt-5 capitalize text-[2rem] font-bold  text-blue-600">
            sign up
          </h1>
        </div>
        {/* inputs */}
        <div className=" w-2/3">
          {step === 1 ? (
            <div className="flex flex-col gap-y-10">
              <div className="flex gap-5">
                <InputField
                  label="Full Name"
                  warning="Enter the valid email ID"
                  value={firstName}
                  setValue={setFirstName}
                  regex={/^[a-z0-9]+@[a-z]+\.[a-z]+$/}
                />
                <InputField
                  label="Last Name"
                  warning="Enter the valid email ID"
                  value={lastName}
                  setValue={setLastName}
                  regex={/^[a-z0-9]+@[a-z]+\.[a-z]+$/}
                />
              </div>
              <InputField
                label="Email ID"
                warning="Email ID"
                value={email}
                setValue={setEmail}
                regex={/^[^s@]+@[^s@]+.[^s@]+$/}
              />
              <div className="flex gap-5">
                <InputField
                  label="+91"
                  warning="password"
                  value={phnoPrefix}
                  setValue={setPhnoPrefix}
                  regex={/^[^s@]+@[^s@]+.[^s@]+$/}
                  className="w-1/5 select-none cursor-none"
                />
                <InputField
                  label="Phone Number"
                  warning="password"
                  value={phno}
                  setValue={setPhno}
                  regex={/^[^s@]+@[^s@]+.[^s@]+$/}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-y-10 ">
              <InputField
                label="PhoneNumber OTP"
                warning="password"
                value={phnoOtp}
                setValue={setPhnoOtp}
                regex={/^[^s@]+@[^s@]+.[^s@]+$/}
                disabled={step === 3 ? true : false}
              />
              <InputField
                label="Email OTP"
                warning="password"
                value={emailOtp}
                setValue={setEmailOtp}
                regex={/^[^s@]+@[^s@]+.[^s@]+$/}
                disabled={step === 3 ? true : false}
              />
              <InputField
                label="Password"
                warning="password"
                value={password}
                setValue={setPassword}
                regex={/^[^s@]+@[^s@]+.[^s@]+$/}
                disabled={step === 2 ? true : false}
              />
              <InputField
                label="Confirm Password"
                warning="password"
                value={confirmPassword}
                setValue={setConfirmPassword}
                regex={/^[^s@]+@[^s@]+.[^s@]+$/}
                disabled={step === 2 ? true : false}
              />
            </div>
          )}
        </div>
        {step === 1 ? (
          <Button onClick={() => setStep(2)} text="Continue" />
        ) : (
          <div className="flex gap-10">
            <Button
              type="secondary"
              text="Back"
              onClick={() => setStep(step - 1)}
            />
            {step == 2 ? (
              <Button text="Verify OTP" onClick={() => setStep(3)} />
            ) : (
              <Button text="Sign Up" onClick={() => setStep(3)} />
            )}
          </div>
        )}
        <p>
          Already have an account ?{" "}
          <span className=" text-blue-700">Sign In</span>
        </p>
      </section>
    </div>
  );
};

export default Register;
