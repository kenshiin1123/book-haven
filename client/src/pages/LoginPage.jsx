import { useEffect } from "react";
import Form from "../components/ui/Form";
import LabelNInput from "../components/ui/LabelNInput";
import Button, { ButtonOutlined } from "../components/ui/Button";
import { redirect, useNavigate, useNavigation } from "react-router";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import HorizontalRule from "../components/ui/HorizontalRule";
import { toast } from "sonner";

export default function LoginPage() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isLoggingIn = navigation.state === "submitting";

  const handleLoginButtonClick = () => {
    navigate("/register");
  };

  useEffect(() => {
    document.title = "Login - Book Haven";
  }, []);

  const labelNInputs = [
    { name: "email", type: "email" },
    { name: "password", type: "password" },
    {
      name: "Confirm Password",
      type: "password",
      id: "confirm_password",
    },
  ];

  return (
    <main className="p-3 min-sm:p-10">
      <Form legend={"Login to your account"} method="POST">
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
        {labelNInputs.map((item, i) => (
          <LabelNInput {...item} key={i} />
        ))}

        <div className="mt-5 flex justify-center gap-4 [&>button]:w-fit [&>button]:py-1">
          <ButtonOutlined
            type={"button"}
            disabled={isLoggingIn}
            onClick={handleLoginButtonClick}
          >
            Register
          </ButtonOutlined>
          <Button type={"Submit"} disabled={isLoggingIn}>
            {isLoggingIn ? "Logging In..." : "Login"}
          </Button>
          <hr />
        </div>
      </Form>
    </main>
  );
}

export const action = async ({ request }) => {
  const data = await request.formData();

  const loginData = {
    email: data.get("email"),
    password: data.get("password"),
    confirm_password: data.get("confirm_password"),
  };

  const hasMissingFields = Object.values(loginData).some((field) => {
    return field === "" || field === null || field === undefined;
  });

  if (hasMissingFields) {
    return toast.error(
      <h1 className=" font-semibold">Please fill all fields!</h1>
    );
  }

  // Confirm Password
  if (loginData.password !== loginData.confirm_password) {
    return toast.error("Password doesn't match!");
  }

  const response = await fetch("http://localhost:3000/api/auth/login", {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  const resData = await response.json();

  if (!resData.success) {
    console.log(loginData);
    return toast.error(resData.message);
  }

  toast.success(resData.message);
  localStorage.setItem("token", resData.token);
  return redirect("/books");
};
