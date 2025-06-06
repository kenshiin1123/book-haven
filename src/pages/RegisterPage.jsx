import LabelNInput from "../components/LabelNInput";
import Button, { ButtonOutlined } from "../components/Button";
import { useNavigate } from "react-router";
export default function RegisterPage() {
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate("/login");
  };

  return (
    <main className="p-3 min-sm:p-10">
      <form
        action=""
        className="mx-auto w-full p-6 mt-5 sm:border sm:w-[33rem] md:w-[40rem]"
      >
        <fieldset className="flex flex-col gap-5">
          <legend className="text-xl text-center font-semibold mb-5">
            Please input your information
          </legend>
          <div className="flex gap-4 justify-between">
            <LabelNInput name={"firstname"} />
            <LabelNInput name={"lastname"} />
          </div>
          <LabelNInput name={"email"} type="email" />
          <LabelNInput name={"birthday"} type="date" />
          <LabelNInput name={"password"} type="password" />
          <LabelNInput
            name={"Confirm Password"}
            type="password"
            id={"confirm_password"}
          />
          <LabelNInput
            name={"Phone Number"}
            type="number"
            id={"phone_number"}
          />
          <LabelNInput name={"Home Address"} type="text" id={"address"} />
        </fieldset>
        <div className="mt-5 flex justify-center gap-4 [&>button]:w-30 [&>button]:py-1">
          <ButtonOutlined type={"button"} onClick={handleLoginButtonClick}>
            Login
          </ButtonOutlined>
          <Button type={"Submit"}>Register</Button>
        </div>
      </form>
    </main>
  );
}
