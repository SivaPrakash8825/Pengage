import React, { useState } from "react";

type Props = {
  label: string;
  warning: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  regex: RegExp;
};

const InputField = ({ label, warning, value, setValue, regex }: Props) => {
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
    <div className="relative w-full ">
      <input
        value={value}
        onChange={handleOnchange}
        className={`border-2 px-4 w-full py-2 peer  ${
          invalid ? "border-red-600" : "border-blue-600"
        } border-black outline-none rounded-md`}
        id="input"
        name="input"
        required
      />
      {/* label */}
      <label
        className=" absolute text-gray-700 top-2 left-4 peer-focus:-top-3  peer-invalid:top-2 peer-valid:-top-3 peer-focus:text-sm  bg-white  transition-all pointer-events-none peer-valid:text-sm"
        htmlFor="input">
        {label}
      </label>
      {/* warning */}
      {invalid && (
        <label
          htmlFor="input"
          className="absolute left-1 top-full text-sm text-red-600">
          {warning}
        </label>
      )}
    </div>
  );
};

export default InputField;
