import React from "react";

type Props = {};

const Select = (props: Props) => {
  return (
    <select
      className=" w-full rounded-md border-2 border-secondary px-2 py-2 text-gray-400 outline-none "
      name=""
      id=""
    >
      <option value="pm">project manager</option>
      <option value="frontend developer">frontend developer</option>
      <option value="backend developer">backend developer</option>
      <option value="datascientist">data scientist</option>
    </select>
  );
};

export default Select;
