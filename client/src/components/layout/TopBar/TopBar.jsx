import { useLocation, useRouteLoaderData } from "react-router";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { useRef } from "react";

import LinksSection from "./LinksSection";
import SearchButton from "./SearchButton";
import SearchModal from "./SearchModal";
import IconLink from "./IconLink";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { IoSunnyOutline } from "react-icons/io5";
import { AiFillMoon } from "react-icons/ai";
import { userActions } from "../../../store/userReducer";

export default function TopBar() {
  const searchRef = useRef();
  const location = useLocation().pathname;
  const cartLength = useSelector((state) => state.user.cart).length;
  const darkTheme = useSelector((state) => state.user.preferences.darkTheme);
  const dispatch = useDispatch();
  const token = useRouteLoaderData("root");

  const handleSearchClose = () => {
    searchRef.current.close();
  };

  const handleDarkThemeClick = () => {
    dispatch(userActions.toggleTheme());
  };

  return (
    <header
      className={`z-30 sticky top-0 color-2 flex flex-col w-full pt-5 px-5 pb-2 ${
        location !== "/cart" && "border-b"
      }`}
    >
      <section className="flex">
        <Link to="/books">
          <h1 className="font-semibold text-3xl">Book Haven</h1>
        </Link>
        <ul className="flex ml-auto gap-4 grow">
          <SearchButton searchRef={searchRef} />
          <div className="flex relative">
            <span className="absolute top-0 right-0 bg-white w-fit rounded-full flex justify-center items-center border text-xs text-[8px]  text-red-600 font-bold size-4 aspect-square ">
              {cartLength > 99 ? "99+" : cartLength}
            </span>
            <IconLink icon={<HiOutlineShoppingCart />} to={"cart"} />
          </div>
          {token ? (
            <IconLink icon={<FaRegUserCircle />} to={"account"} />
          ) : (
            <button
              className="ml-2 flex justify-center items-center text-3xl my-auto hover:rotate-10 transition active:scale-95"
              onClick={handleDarkThemeClick}
            >
              {darkTheme ? <AiFillMoon /> : <IoSunnyOutline />}
            </button>
          )}
        </ul>
      </section>
      <LinksSection token={token} />
      <SearchModal ref={searchRef} handleSearchClose={handleSearchClose} />
    </header>
  );
}
