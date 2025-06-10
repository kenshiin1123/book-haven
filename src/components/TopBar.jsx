import { Link } from "react-router";
import { ButtonOutlined } from "./Button";

import { TiHome } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { RiBookShelfLine } from "react-icons/ri";

export default function TopBar() {
  return (
    <header className="z-30 sticky top-0 bg-white flex flex-col w-full pt-5 px-5 pb-2 border-b border-b-gray-500">
      <section className="flex">
        <h1 className="font-semibold text-xl">Book Haven</h1>
        <ul className="flex ml-auto gap-4">
          <IconLink icon={<IoSearchOutline />} />
          <IconLink icon={<HiOutlineShoppingCart />} />
          <IconLink icon={<FaRegUserCircle />} to={"account"} />
        </ul>
      </section>
      <section className="mt-4">
        <ul className="flex gap-4 [&>li>a]:font-semibold [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-2 [&>li>a]:hover:underline [&>li>a>svg]:text-xl">
          <li>
            <Link to={"/"}>
              <TiHome /> Home
            </Link>
          </li>
          <li>
            <Link to={"/books"}>
              <RiBookShelfLine /> Books
            </Link>
          </li>
          <li className="ml-auto">
            <Link to={"/register"}>Register</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      </section>
    </header>
  );
}

const IconLink = ({ icon, to }) => {
  return (
    <li>
      <Link
        className={`text-4xl focus:outline-none focus:scale-105 active:scale-95`}
        to={to}
      >
        {icon}
      </Link>
    </li>
  );
};
