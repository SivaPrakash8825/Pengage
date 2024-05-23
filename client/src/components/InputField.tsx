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
        className={`border-2 px-3 w-full py-2 peer  ${
          invalid ? "border-red-600" : "border-blue-600"
        } border-black outline-none rounded-md disabled:bg-gray-300 disabled:border-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed`}
        id="input"
        name="input"
        required
        disabled={disabled}
      />
      {/* label */}
      <label
        className=" absolute text-gray-500 top-2 left-3 peer-focus:-top-3  peer-invalid:top-2 peer-valid:-top-3 peer-focus:text-sm select-none  bg-white px-1 peer-disabled:bg-transparent  transition-all pointer-events-none peer-valid:text-sm"
        htmlFor="input"
      >
        {label}
      </label>
      {/* warning */}
      {invalid && (
        <label
          htmlFor="input"
          className="absolute gap-1 flex left-1 top-[105%] text-sm text-red-600"
        >
          <img
            src={WarningImg}
            className="w-[1rem] my-auto object-contain"
            alt="WarningImg"
          />
          {warning}
        </label>
      )}
    </div>
  );
};

export default InputField;
