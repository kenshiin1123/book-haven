import { useEffect, useRef } from "react";
import Form from "../components/Form";
import LabelNInput from "../components/LabelNInput";
import Button, { ButtonOutlined } from "../components/Button";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Email: ${email.current.value}\n` +
        `Password: ${password.current.value}\n` +
        `Confirm Password: ${confirmPassword.current.value}\n`
    );
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
        {labelNInputs.map((item, i) => (
          <LabelNInput {...item} key={i} />
        ))}
        <div className="mt-5 flex justify-center gap-4 [&>button]:w-30 [&>button]:py-1">
          <ButtonOutlined type={"button"} onClick={handleLoginButtonClick}>
            Register
          </ButtonOutlined>
          <Button type={"Submit"}>Login</Button>
        </div>
      </Form>
    </main>
  );
}
