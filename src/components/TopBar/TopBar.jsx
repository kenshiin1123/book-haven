import { useLocation } from "react-router";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { useRef } from "react";

import LinksSection from "./LinksSection";
import SearchButton from "./SearchButton";
import SearchModal from "./SearchModal";
import IconLink from "./IconLink";
import { useSelector } from "react-redux";

export default function TopBar() {
  const searchRef = useRef();
  const location = useLocation().pathname;
  const cartLength = useSelector((state) => state.user.cart).length;

  const handleSearchClose = () => {
    searchRef.current.close();
  };

  return (
    <header
      className={`z-30 sticky top-0 bg-white flex flex-col w-full pt-5 px-5 pb-2 ${
        location !== "/cart" && "border-b border-b-gray-500"
      }`}
    >
      <section className="flex">
        <h1 className="font-semibold text-xl">Book Haven</h1>
        <ul className="flex ml-auto gap-4 grow">
          <SearchButton searchRef={searchRef} />
          <div className="flex relative">
            <span className="absolute top-0 right-0 bg-white w-fit p-0.5 rounded-full flex justify-center items-center border text-xs text-[8px] p text-red-600 border-red-600 font-bold size-5 aspect-square ">
              {cartLength > 99 ? "99+" : cartLength}
            </span>
            <IconLink icon={<HiOutlineShoppingCart />} to={"cart"} />
          </div>
          <IconLink icon={<FaRegUserCircle />} to={"account"} />
        </ul>
      </section>
      <LinksSection />
      <SearchModal ref={searchRef} handleSearchClose={handleSearchClose} />
    </header>
  );
}
