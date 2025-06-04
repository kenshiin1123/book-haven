import { Outlet } from "react-router";

import FilterSideBar from "./components/FilterSideBar";
import TopBar from "./components/TopBar";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";

export default function Layout() {
  const [showFilterSideBar, setShowFilterSideBar] = useState(false);

  const toggleFilterSideBar = () => {
    setShowFilterSideBar((prev) => !prev);
  };

  return (
    <>
      <TopBar />
      <FilterSideBar active={showFilterSideBar} />
      <button
        onClick={toggleFilterSideBar}
        className={`fixed border text-2xl p-2 rounded ml-4 mt-4 bg-white right-4`}
      >
        <FaFilter />
      </button>
      <main className="px-5 pb-10">
        <HeroHeader />
        <Outlet />
      </main>
    </>
  );
}

const HeroHeader = () => {
  return (
    <>
      <h1 className="text-3xl mt-10 max-sm:mt-10 font-bold">
        Grow With Every Page.
      </h1>
      <p className="text-justify mt-4 mb-20">
        Explore books that fuel self-mastery, sharpen your mindset, and keep you
        moving forward.
      </p>
    </>
  );
};
