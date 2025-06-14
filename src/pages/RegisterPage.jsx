import LabelNInput from "../components/LabelNInput";
import Button, { ButtonOutlined } from "../components/Button";
import { useNavigate } from "react-router";
import Map from "../components/Map";
import { useEffect, useRef, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

import Form from "../components/Form";

export default function RegisterPage() {
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const birthday = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const phoneNumber = useRef();
  const homeAddress = useRef();

  const [showMap, setShowMap] = useState();

  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate("/login");
  };

  const handleMapClick = (address, latlng) => {
    homeAddress.current.value = address;
  };

  useEffect(() => {
    document.title = "Register - Book Haven";
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `First Name: ${firstname.current.value}\n` +
        `Last Name: ${lastname.current.value}\n` +
        `Email: ${email.current.value}\n` +
        `Birthday: ${birthday.current.value}\n` +
        `Password: ${password.current.value}\n` +
        `Confirm Password: ${confirmPassword.current.value}\n` +
        `Phone Number: ${phoneNumber.current.value}\n` +
        `Home Address: ${homeAddress.current.value}`
    );
  };

  const handleShowMap = () => {
    setShowMap(true);
  };

  return (
    <main className="p-3 min-sm:p-10">
      <Form handleSubmit={handleSubmit} legend={"Registeration"}>
        <fieldset className="flex flex-col gap-5">
          <div className="flex gap-4 justify-between">
            <LabelNInput name={"firstname"} ref={firstname} />
            <LabelNInput name={"lastname"} ref={lastname} />
          </div>
          <LabelNInput name={"email"} type="email" ref={email} />
          <LabelNInput name={"birthday"} type="date" ref={birthday} />
          <LabelNInput name={"password"} type="password" ref={password} />
          <LabelNInput
            ref={confirmPassword}
            name={"Confirm Password"}
            type="password"
            id={"confirm_password"}
          />
          <LabelNInput
            ref={phoneNumber}
            name={"Phone Number"}
            type="number"
            id={"phone_number"}
          />
          <LabelNInput
            ref={homeAddress}
            name={"Home Address"}
            type="text"
            id={"address"}
          />
          <ButtonOutlined
            classExtension={"flex items-center gap-3 w-fit py-1"}
            onClick={handleShowMap}
          >
            <small className="text-gray-600">(optional)</small>
            Select address <IoLocationSharp />
          </ButtonOutlined>
          {showMap && <Map handleMapClick={handleMapClick} />}
        </fieldset>
        <div className="mt-5 flex justify-center gap-4 [&>button]:w-30 [&>button]:py-1">
          <ButtonOutlined type={"button"} onClick={handleLoginButtonClick}>
            Login
          </ButtonOutlined>
          <Button type={"Submit"}>Register</Button>
        </div>
      </Form>
    </main>
  );
}
