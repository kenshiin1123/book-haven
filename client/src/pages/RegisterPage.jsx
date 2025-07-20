import LabelNInput from "../components/ui/LabelNInput";
import Button, { ButtonOutlined } from "../components/ui/Button";
import { redirect, useNavigate, useNavigation } from "react-router";
import Map from "../components/ui/Map";
import { useEffect, useRef, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

import Form from "../components/ui/Form";
import HorizontalRule from "../components/ui/HorizontalRule";
import { FaFacebook, FaGoogle } from "react-icons/fa";

import { toast } from "sonner";

export default function RegisterPage() {
  const homeAddress = useRef();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

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

  const handleShowMap = () => {
    setShowMap(true);
  };

  const labelNInputs = [
    {
      name: "email",
      type: "email",
    },
    {
      name: "birthday",
      type: "date",
    },
    {
      name: "password",
      type: "password",
    },
    {
      name: "Confirm Password",
      type: "password",
      id: "confirm_password",
    },
    {
      name: "Phone Number",
      type: "number",
      id: "phone_number",
    },
    {
      ref: homeAddress,
      name: "Home Address",
      type: "text",
      id: "address",
    },
  ];

  return (
    <main className="p-3 min-sm:p-10 ">
      <Form legend={"Registration"} method={"post"}>
        <div className="[&>button]:py-2 flex justify-center gap-5 [&>button]:w-full [&>button]:flex [&>button]:gap-2 [&>button>svg]:text-2xl [&>button]:font-bold ">
          <ButtonOutlined>
            <FaGoogle />
            Google
          </ButtonOutlined>
          <ButtonOutlined>
            <FaFacebook />
            Facebook
          </ButtonOutlined>
        </div>
        <HorizontalRule>or</HorizontalRule>
        <fieldset className="flex flex-col gap-5">
          <div className="flex gap-4 justify-between">
            <LabelNInput name={"firstname"} />
            <LabelNInput name={"lastname"} />
          </div>
          {labelNInputs.map((item, i) => (
            <LabelNInput {...item} key={i} />
          ))}
          <ButtonOutlined
            classExtension={"flex items-center gap-3 w-fit py-1"}
            onClick={handleShowMap}
          >
            <small className="text-gray-600 dark:text-white/50">
              (optional)
            </small>
            Select address <IoLocationSharp />
          </ButtonOutlined>
          {showMap && <Map handleMapClick={handleMapClick} />}
        </fieldset>

        <div className="mt-5 flex justify-center gap-4 [&>button]:w-fit [&>button]:py-1">
          <ButtonOutlined
            type={"button"}
            onClick={handleLoginButtonClick}
            disabled={isSubmitting}
          >
            Login
          </ButtonOutlined>
          <Button type={"Submit"} disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </Button>
        </div>
      </Form>
    </main>
  );
}

export const action = async ({ request, parameter }) => {
  const data = await request.formData();
  const fields = [
    "firstname",
    "lastname",
    "email",
    "birthday",
    "password",
    "confirm_password",
    "phone_number",
    "address",
  ];

  // Do not proceed if there are missing fields
  const hasMissingField = fields.some((field) => {
    const value = data.get(field);
    return value === "" || value === null || value === undefined;
  });

  if (hasMissingField) {
    return toast.error("Fill all fields!");
  }

  const password = data.get("password");
  const confirm_password = data.get("confirm_password");

  // Make sure that password and confirm password is the same
  if (password !== confirm_password) {
    return toast.error("Password does not match!");
  }

  const registerData = {
    firstname: data.get("firstname"),
    lastname: data.get("lastname"),
    email: data.get("email"),
    birthday: data.get("birthday"),
    password: data.get("password"),
    phone: data.get("phone_number"),
    address: data.get("address"),
  };

  const response = await fetch("http://localhost:3000/api/auth/signup", {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
  });

  const resData = await response.json();

  if (!resData.success) {
    const errors = Object.values(resData.responseData);

    return toast.error(
      <p className="text-lg font-semibold">Register Failed!</p>,
      {
        description: errors.map((error) => {
          return <p className="text-red-500">{error}</p>;
        }),
      }
    );
  }

  toast.success("Successfully Registered!");
  return redirect("/login");
};
