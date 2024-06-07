import { useEffect, useState } from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Image1 from "/img1.png";
import Image2 from "/img2.png";
import Image3 from "/img3.png";

type Props = {};

const Details = (props: Props) => {
  const [designation, setDesignation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phnoPrefix, setPhnoPrefix] = useState("+91");
  const [phno, setPhno] =useState("");
  const [compaddress, setCompaddress] = useState("");
  const [errors, setErrors] = useState({
    companyName: "",
    compaddress: "",
  });


const handleFieldError = (fieldName: string, error: string) => {
  setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error }));
};

const handleSubmit = () => {
  for (const [key, value] of Object.entries({ companyName, compaddress })) {
    if (value.trim() === "") {
      handleFieldError(key, `${key} is required`);
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

  return(
    <div className="flex flex-col">
      <h1 className="p-3 border mt-20 border-[#204E10]  rounded-lg px-7 bg-[#C0FF9A] w-1/2 mx-auto" >
        Account created successfully. Please fill the below details to complete your profile.
      </h1>
      <h1 className="mt-10 text-[2.5rem] font-bold text-black-600 mx-auto">
        Welcome, username
      </h1>
      <h4 className="mt-8 mx-40 text-[1.75rem] font-bold text-black-600 "> 
        Profile Details
      </h4>
    <div>
      <div className="flex flex-col mt-10 gap-y-10 w-2/3 mx-auto">
      <div className="flex">
          <label className="w-1/2 font-bold">Designation</label>
          <InputField 
          name="Designation"
          label="Desigantion"
          warning="Designation"
          value={designation}
          setValue={setDesignation}
          regex={/^[a-zA-Z\s.'-]{2,50}$/}
          onError={handleFieldError}
          errorMsg="Valid Designation"
        />
        </div>
        <div className="flex">
          <label className="w-1/2 font-bold">Company Name</label>
          <InputField 
          name="companyName"
          label="Company Name"
          warning="Company Name"
          value={companyName}
          setValue={setCompanyName}
          regex={/^[a-zA-Z0-9\s.'-]{2,100}$/}
          onError={handleFieldError}
          errorMsg="Valid company name required"
        />
        </div>
        <div className="flex gap-5">
          <label className="w-1/2 font-bold">Company contact number</label>
        <InputField
          name="phnoPrefix"
          label="+91"
          warning=""
          value={phnoPrefix}
          setValue={setPhnoPrefix}
          regex={/^[^s@]+@[^s@]+.[^s@]+$/}
          className="w-1/6 select-none cursor-none"
          onError={handleFieldError}
          errorMsg="valid  phone number prefix required"
          disabled={true}
        />
        <InputField
          name="phno"
          label="Phone Number"
          warning="phone number"
          value={phno}
          setValue={setPhno}
          regex={/^[^s@]+@[^s@]+.[^s@]+$/}
          className="w-5/6 select-none cursor-none"
          onError={handleFieldError}
          errorMsg="valid phone number required"
        />
        </div>
        <div className="flex">
          <label className="w-1/2 font-bold">Company Address</label>
          <InputField 
          name="compaddress"
          label="Company Address line1"
          warning="Company Address"
          value={compaddress}
          setValue={setCompaddress}
          regex={/^[a-zA-Z0-9\s.,'-]{2,100}$/}
          onError={handleFieldError}
          errorMsg="Valid company address required"
        />
        </div>
        <div className="flex">
        <label className="w-1/2 flex-auto"></label>
        <InputField 
          name="compaddress"
          label="Company Address line2"
          warning="Company Address"
          value={compaddress}
          setValue={setCompaddress}
          regex={/^[a-zA-Z0-9\s.,'-]{2,100}$/}
          onError={handleFieldError}
          errorMsg="Valid company address required"
        />
        </div>
        <div className="flex gap-5">
        <label className="w-1/2"></label>
        <InputField 
            name="compaddress"
            label="City"
            warning="City"
            value={compaddress}
            setValue={setCompaddress}
            regex={/^[a-zA-Z\s.'-]{2,50}$/}
            className="w-1/2 select-none cursor-none"
            onError={handleFieldError}
            errorMsg="Valid city required"
          />
          <InputField 
            name="compaddress"
            label="State"
            warning="State"
            value={compaddress}
            setValue={setCompaddress}
            regex={/^[a-zA-Z\s.'-]{2,50}$/}
            className="w-1/2 select-none cursor-none"
            onError={handleFieldError}
            errorMsg="Valid state required"
          />
          </div>
        <div className="flex gap-5">
        <label className="w-1/2"></label>
          <InputField 
            name="compaddress"
            label="Zip code"
            warning="Zip code"
            value={compaddress}
            setValue={setCompaddress}
            regex={/^\d{5}$/}
            className="w-1/4 select-none cursor-none"
            onError={handleFieldError}
            errorMsg="Valid zip code required"
          />
          <InputField 
            name="compaddress"
            label="Country"
            warning="Country"
            value={compaddress}
            setValue={setCompaddress}
            regex={/^[a-zA-Z\s.'-]{2,50}$/}
            className="w-3/4 select-none cursor-none"
            onError={handleFieldError}
            errorMsg="Valid country required"
          />  
        </div>
      </div>
    </div>
      <Button className="mx-auto mt-10 font-bold right-0 mb-20 mr-60" text="Save" onClick={handleSubmit} />
      <img src={Image1} className="fixed top-0 left-0 h-full" />
      <img src={Image2} className="fixed top-0 right-0 h-full" />
      <img src={Image3} className="fixed top-[150px] right-[150px] w-300 h-auto" />
      <Link to={"/details"}></Link>
    </div>
    
);
}
export default Details;
