import books from "../data/books";
import { useState } from "react";

import FilterSideBar from "../components/FilterSideBar";

import BookCards from "../components/BookCards";

export default function BooksPage() {
  const [showFilterSideBar, setShowFilterSideBar] = useState(false);
  const toggleFilterSideBar = () => {
    setShowFilterSideBar((prev) => !prev);
  };
  return (
    <>
      <FilterSideBar
        active={showFilterSideBar}
        togglerFunc={toggleFilterSideBar}
      />

      <main className="my-5">
        <BookCards books={books} />
      </main>
    </>
  );
}
