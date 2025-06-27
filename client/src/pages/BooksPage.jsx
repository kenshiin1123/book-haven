import { useEffect, useState } from "react";

import FilterSideBar from "../components/FilterSideBar";

import BookCard from "../components/BookCard";
import { useDispatch, useSelector } from "react-redux";
import Button, { ButtonOutlined } from "../components/Button";
import { bookActions } from "../store/bookReducer";

export default function BooksPage() {
  const books = useSelector((state) => state.book.books);
  const filteredBooks = useSelector((state) => state.book.filteredBooks);
  const dispatch = useDispatch();

  const [showFilterSideBar, setShowFilterSideBar] = useState(false);
  const toggleFilterSideBar = () => {
    setShowFilterSideBar((prev) => !prev);
  };

  useEffect(() => {
    document.title = "Browse All Books - Book Haven";
  }, []);

  const handleClearFilter = () => {
    dispatch(bookActions.resetFilterBook());
  };

  return (
    <>
      <FilterSideBar
        active={showFilterSideBar}
        togglerFunc={toggleFilterSideBar}
      />
      <main className="my-5">
        {books.length !== filteredBooks.length && (
          <div className="p-3 mx-auto w-60 mb-5 flex justify-center items-center">
            <ButtonOutlined
              onClick={handleClearFilter}
              classExtension={"w-full h-full py-2"}
            >
              Clear Filter
            </ButtonOutlined>
          </div>
        )}
        <div className="flex flex-wrap max-md:gap-5 min-md:gap-2 w-fit mx-auto justify-center min-sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredBooks.map((b) => {
            return <BookCard {...b} key={b._id} />;
          })}
        </div>
      </main>
    </>
  );
}
