import { useEffect, useRef } from "react";
import Form from "../components/Form";
import LabelNInput from "../components/LabelNInput";
import Button, { ButtonOutlined } from "../components/Button";
import { useNavigate } from "react-router";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import HorizontalRule from "../components/HorizontalRule";
import { Password, Email } from "../schema/user.schema";
import { toast } from "sonner";

export default function LoginPage() {
  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const toastError = (result) => {
    toast.error(result.error.errors.map((err) => err.message));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailValidate = Email.safeParse(email.current.value);
    if (!emailValidate.success) return toastError(emailValidate);

    const passwordValidate = Password.safeParse(password.current.value);
    if (!passwordValidate.success) return toastError(passwordValidate);

    if (passwordValidate.data !== confirmPassword.current.value) {
      return toast.error(
        "Passwords do not match. Please re-enter your password."
      );
    }

    toast.success("Logged in successfully.");
    navigate("/books");
  };

  const handleLoginButtonClick = () => {
    navigate("/register");
  };

  useEffect(() => {
    document.title = "Login - Book Haven";
  }, []);

  const labelNInputs = [
    { name: "email", type: "email", ref: email },
    { name: "password", type: "password", ref: password },
    {
      name: "Confirm Password",
      type: "password",
      ref: confirmPassword,
      id: "confirm_password",
    },
  ];

  return (
    <main className="p-3 min-sm:p-10">
      <Form legend={"Login to your account"} handleSubmit={handleSubmit}>
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

        <div className="mt-5 flex justify-center gap-4 [&>button]:w-30 [&>button]:py-1">
          <ButtonOutlined type={"button"} onClick={handleLoginButtonClick}>
            Register
          </ButtonOutlined>
          <Button type={"Submit"}>Login</Button>
          <hr />
        </div>
      </Form>
    </main>
  );
}
