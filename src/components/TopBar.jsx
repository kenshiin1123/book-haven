import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";

export default function TopBar() {
  return (
    <header className="flex items-center w-full h-16 p-2 max-sm:p-7 sm:p-10 border-b border-b-gray-500">
      <h1 className="font-semibold text-xl">Book Haven</h1>
      <ul className="flex ml-auto gap-4">
        <ButtonIcon icon={<IoSearchOutline />} />
        <ButtonIcon icon={<HiOutlineShoppingCart />} />
        <ButtonIcon icon={<FaRegUserCircle />} />
      </ul>
    </header>
  );
}

const ButtonIcon = ({ icon }) => {
  return (
    <li>
      <button
        className={`text-4xl focus:outline-none focus:scale-105 active:scale-95`}
      >
        {icon}
      </button>
    </li>
  );
};
