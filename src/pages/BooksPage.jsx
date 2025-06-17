import { useEffect, useState } from "react";

import FilterSideBar from "../components/FilterSideBar";

import BookCard from "../components/BookCard";
import { useSelector } from "react-redux";

export default function BooksPage() {
  const books = useSelector((state) => state.book.books);
  const searchedBooks = useSelector((state) => state.book.searchedBooks);

  const [showFilterSideBar, setShowFilterSideBar] = useState(false);
  const toggleFilterSideBar = () => {
    setShowFilterSideBar((prev) => !prev);
  };

  useEffect(() => {
    document.title = "Browse All Books - Book Haven";
  }, []);

  return (
    <>
      <FilterSideBar
        active={showFilterSideBar}
        togglerFunc={toggleFilterSideBar}
      />

      <main className="my-5">
        <div className="flex flex-wrap max-md:gap-5 min-md:gap-2 w-fit mx-auto justify-center min-sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchedBooks.length < 1
            ? books.map((b) => {
                return <BookCard {...b} key={b._id} />;
              })
            : searchedBooks.map((b) => {
                return <BookCard {...b.item} key={b.item._id} />;
              })}
        </div>
      </main>
    </>
  );
}
