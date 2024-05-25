import React, { useEffect, useState } from "react";
import Image from "../../assets/react.svg";
import InputField from "../../components/InputField";
import ProgressState from "../../components/ProgressState";
import Button from "../../components/Button";
import LeftsideBox from "../../components/Auth/LeftsideBox";
import { Link } from "react-router-dom";

type Props = {};

const Register = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phnoPrefix, setPhnoPrefix] = useState("+91");
  const [phno, setPhno] = useState("");
  const [email, setEmail] = useState("");
  const [phnoOtp, setPhnoOtp] = useState("");
  const [emailOtp, setEmailOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState<number>(1);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleFieldError = (fieldName: string, error: string) => {
    setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
  };

  const handleSubmit = () => {
    for (const [key, value] of Object.entries({ email, password })) {
      if (value.trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [key]: `${key} is required`,
        }));
      }
    }

    if (!Object.values(errors).some((error) => error !== "")) {
      console.log("Success: All fields are valid");
    } else {
      console.log("Errors found:", errors);
    }
  };

  useEffect(() => {
    console.log("Errors:", errors);
  }, [errors]);

  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-bg bg-contain">
      <div className="w-4/6 flex overflow-hidden rounded-md shadow-xl bg-white">
        <LeftsideBox />
        <section className=" flex-1 flex  flex-col gap-8 justify-center items-center text-center py-20">
          <ProgressState step={step} />
          {/* heading */}
          <div className=" flex flex-col">
            <h1 className="mt-5 capitalize text-[2rem] font-bold  text-blue-600">
              sign up
            </h1>

            <h1 className="p-3 border mt-2 border-[#204E10]  rounded-lg px-7 bg-[#C0FF9A]">
              Enter the valid OTP to verify email and phno
            </h1>
          </div>
          {/* inputs */}
          <div className=" w-2/3">
            {step === 1 ? (
              <div className="flex flex-col gap-y-10">
                <div className="flex gap-5">
                  <InputField
                    name="firstName"
                    label="Full Name"
                    warning="Enter the valid email ID"
                    value={firstName}
                    setValue={setFirstName}
                    regex={/^[a-z0-9]+@[a-z]+\.[a-z]+$/}
                    onError={handleFieldError}
                    errorMsg="valid full name required"
                  />
                  <InputField
                    name="lastName"
                    label="Last Name"
                    warning="Enter the valid email ID"
                    value={lastName}
                    setValue={setLastName}
                    regex={/^[a-z0-9]+@[a-z]+\.[a-z]+$/}
                    onError={handleFieldError}
                    errorMsg="valid last name required"
                  />
                </div>
                <InputField
                  name="email"
                  label="Email ID"
                  warning="Email ID"
                  value={email}
                  setValue={setEmail}
                  regex={/^[^s@]+@[^s@]+.[^s@]+$/}
                  onError={handleFieldError}
                  errorMsg="valid email ID required"
                />
                <div className="flex gap-5">
                  <InputField
                    name="phnoPrefix"
                    label="+91"
                    warning="password"
                    value={phnoPrefix}
                    setValue={setPhnoPrefix}
                    regex={/^[^s@]+@[^s@]+.[^s@]+$/}
                    className="w-1/5 select-none cursor-none"
                    onError={handleFieldError}
                    errorMsg="valid  phone number prefix required"
                    disabled={true}
                  />
                  <InputField
                    name="phno"
                    label="Phone Number"
                    warning="password"
                    value={phno}
                    setValue={setPhno}
                    regex={/^[^s@]+@[^s@]+.[^s@]+$/}
                    onError={handleFieldError}
                    errorMsg="valid phone number required"
                  />
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-y-10 ">
                <InputField
                  name="phnoOtp"
                  label="PhoneNumber OTP"
                  warning="password"
                  value={phnoOtp}
                  setValue={setPhnoOtp}
                  regex={/^[^s@]+@[^s@]+.[^s@]+$/}
                  disabled={step === 3 ? true : false}
                  onError={handleFieldError}
                  errorMsg="valid phone number OTP required"
                />
                <InputField
                  name="emailOtp"
                  label="Email OTP"
                  warning="password"
                  value={emailOtp}
                  setValue={setEmailOtp}
                  regex={/^[^s@]+@[^s@]+.[^s@]+$/}
                  disabled={step === 3 ? true : false}
                  onError={handleFieldError}
                  errorMsg="valid email OTP required"
                />
                <InputField
                  name="password"
                  label="Password"
                  warning="password"
                  value={password}
                  setValue={setPassword}
                  regex={/^[^s@]+@[^s@]+.[^s@]+$/}
                  disabled={step === 2 ? true : false}
                  onError={handleFieldError}
                  errorMsg="valid password required"
                />
                <InputField
                  name="confirmPassword"
                  label="Confirm Password"
                  warning="password"
                  value={confirmPassword}
                  setValue={setConfirmPassword}
                  regex={/^[^s@]+@[^s@]+.[^s@]+$/}
                  disabled={step === 2 ? true : false}
                  onError={handleFieldError}
                  errorMsg="valid password required"
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
            <Link to={"/login"} className="ml-2 text-blue-700 font-semibold">
              Sign In
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Register;
