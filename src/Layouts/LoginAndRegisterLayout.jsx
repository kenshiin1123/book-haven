import { Outlet, useNavigate } from "react-router";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function LoginAndRegisterLayout() {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <main className="p-10">
      <button
        className="text-5xl mt-5 active:scale-95"
        onClick={handleBackButtonClick}
      >
        <RiArrowGoBackFill />
      </button>
      <Outlet />
    </main>
  );
}
