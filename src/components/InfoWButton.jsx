import { useNavigate } from "react-router";
import Button from "./Button";
export default function InfoWButton({ title, buttonName, navigateTo }) {
  const navigate = useNavigate();
  return (
    <div className="color-3 border w-fit mx-auto p-5 text-center text-xl mt-10">
      <h1>{title}</h1>
      <Button
        onClick={() => navigate(navigateTo)}
        classExtension={"mt-4 py-2 w-full"}
      >
        {buttonName}
      </Button>
    </div>
  );
}
