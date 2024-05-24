import React, { useState } from "react";
import WarningImg from "../assets/warning.png";
import { twMerge } from "tailwind-merge";

type Props = {
  label: string;
  warning: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  regex: RegExp;
  className?: string;
  disabled?: boolean;
};

const InputField = ({
  label,
  warning,
  value,
  setValue,
  regex,
  className,
  disabled = false,
}: Props) => {
  const [invalid, setInvalid] = useState(false);

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (regex.test(e.target.value)) {
      setInvalid(false);
    } else {
      setInvalid(true);
    }
    if (!e.target.value) {
      setInvalid(true);
    }
  };

  return (
    <div className={`${twMerge("relative w-full", className)}`}>
      <input
        value={value}
        onChange={handleOnchange}
        className={`peer w-full border-2 px-3 py-2  ${
          invalid ? "border-red-600" : "border-blue-600"
        } rounded-md border-black outline-none disabled:cursor-not-allowed disabled:border-gray-400 disabled:bg-gray-300 disabled:text-gray-500`}
        id="input"
        name="input"
        required
        disabled={disabled}
      />
      {/* label */}
      <label
        className=" pointer-events-none absolute left-3 top-2 select-none  bg-white px-1 text-gray-500 transition-all  peer-valid:-top-3 peer-valid:text-sm peer-invalid:top-2  peer-focus:-top-3 peer-focus:text-sm peer-disabled:bg-transparent"
        htmlFor="input"
      >
        {label}
      </label>
      {/* warning */}
      {invalid && (
        <label
          htmlFor="input"
          className="absolute left-1 top-[105%] flex gap-1 text-sm text-red-600"
        >
          <img
            src={WarningImg}
            className="my-auto w-[1rem] object-contain"
            alt="WarningImg"
          />
          {warning}
        </label>
      )}
    </div>
  );
};

export default InputField;
