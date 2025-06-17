import { useLocation } from "react-router";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { useRef } from "react";

import LinksSection from "./LinksSection";
import SearchButton from "./SearchButton";
import SearchModal from "./SearchModal";
import IconLink from "./IconLink";

export default function TopBar() {
  const searchRef = useRef();
  const location = useLocation().pathname;

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
          <IconLink icon={<HiOutlineShoppingCart />} to={"cart"} />
          <IconLink icon={<FaRegUserCircle />} to={"account"} />
        </ul>
      </section>
      <LinksSection />
      <SearchModal ref={searchRef} handleSearchClose={handleSearchClose} />
    </header>
  );
}
