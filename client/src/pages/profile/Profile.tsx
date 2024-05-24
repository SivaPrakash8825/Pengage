import React, { useState } from "react";
import ImageClip from "../../components/ImageClip";
import InputField from "../../components/InputField";
import Select from "../../components/Select";
import Button from "../../components/Button";
type Props = {};

const Profile = (props: Props) => {
  const [Designation, setDesignation] = useState("");

  const handleOnclick = () => {};
  return (
    <div className=" relative grid h-full w-full place-content-center overflow-hidden">
      <ImageClip />
      <section>
        <h1 className=" mb-2 text-center text-3xl font-bold">Welcome , siva</h1>
        <section>
          <h1 className=" mb-4 text-2xl font-bold">company profile</h1>
          <section className=" grid grid-cols-[250px_700px] gap-y-7">
            <p>Designation*</p>
            <Select />
            <p>company name*</p>
            <InputField
              label=""
              regex={/^$/}
              setValue={setDesignation}
              value={Designation}
              warning="more than 20"
            />
            <p>company contact number*</p>
            <InputField
              label=""
              regex={/^$/}
              setValue={setDesignation}
              value={Designation}
              warning="more than 20"
            />
            <p>company address*</p>
            <InputField
              label="address line 1"
              regex={/^$/}
              setValue={setDesignation}
              value={Designation}
              warning="more than 20"
            />
            <p></p>
            <InputField
              label="address line 2"
              regex={/^$/}
              setValue={setDesignation}
              value={Designation}
              warning="more than 20"
            />
            <p></p>
            <div className=" flex gap-x-3">
              <InputField
                label="city"
                regex={/^$/}
                setValue={setDesignation}
                value={Designation}
                warning="more than 20"
              />
              <InputField
                label="state"
                regex={/^$/}
                setValue={setDesignation}
                value={Designation}
                warning="more than 20"
              />
            </div>
            <p></p>
            <div className=" flex gap-x-3">
              <InputField
                className=" w-40"
                label="zip code"
                regex={/^$/}
                setValue={setDesignation}
                value={Designation}
                warning="more than 20"
              />
              <Select />
            </div>
            <p></p>
            <Button text="save" className={""} onClick={handleOnclick} />
          </section>
        </section>
      </section>
    </div>
  );
};

export default Profile;
