import { useLocation } from "react-router";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { useRef } from "react";

import LinksSection from "./LinksSection";
import SearchButton from "./SearchButton";
import SearchModal from "./SearchModal";
import IconLink from "./IconLink";
import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function TopBar() {
  const searchRef = useRef();
  const location = useLocation().pathname;
  const cartLength = useSelector((state) => state.user.cart).length;

  const handleSearchClose = () => {
    searchRef.current.close();
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
          <IconLink icon={<FaRegUserCircle />} to={"account"} />
        </ul>
      </section>
      <LinksSection />
      <SearchModal ref={searchRef} handleSearchClose={handleSearchClose} />
    </header>
  );
}
