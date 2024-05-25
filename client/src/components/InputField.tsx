import React, { useState } from "react";
import WarningImg from "../assets/warning.png";
import { twMerge } from "tailwind-merge";

type Props = {
  name: string;
  label: string;
  warning: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  regex: RegExp;
  onError: (name: string, error: string) => void;
  className?: string;
  disabled?: boolean;
  errorMsg: string;
};

const InputField = ({
  name,
  label,
  warning,
  value,
  setValue,
  regex,
  className,
  disabled = false,
  onError,
  errorMsg,
}: Props) => {
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    setTouched(true);
  };
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    let validationError = "";
    if (newValue.trim() === "") {
      validationError = `${label} is required`;
    } else if (!regex.test(newValue)) {
      validationError = errorMsg!;
    }

    // setError(validationError);
    onError(name, validationError);
  };

  return (
    <div className={`${twMerge("relative w-full", className)}`}>
      <input
        value={value}
        onChange={handleOnchange}
        className={`border-2 px-3 w-full py-2 peer  ${
          warning ? "border-red-600" : "border-blue-600"
        } border-black outline-none rounded-md disabled:bg-gray-300 disabled:border-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed`}
        id="input"
        name="input"
        required
        disabled={disabled}
        onBlur={handleBlur}
      />
      {/* label */}
      <label
        className=" absolute text-gray-500 top-2 left-3 peer-focus:-top-3  peer-invalid:top-2 peer-valid:-top-3 peer-focus:text-sm select-none  bg-white px-1 peer-disabled:bg-transparent  transition-all pointer-events-none peer-valid:text-sm"
        htmlFor="input"
      >
        {label}
      </label>
      {/* warning */}
      {warning && (
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
