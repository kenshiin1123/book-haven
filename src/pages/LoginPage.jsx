import { useRef } from "react";
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

  return (
    <main className="p-3 min-sm:p-10">
      <Form legend={"Login to your account"} handleSubmit={handleSubmit}>
        <LabelNInput name={"email"} type="email" ref={email} />
        <LabelNInput name={"password"} type="password" ref={password} />
        <LabelNInput
          name={"Confirm Password"}
          type="password"
          ref={confirmPassword}
          id={"confirm_password"}
        />
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
