import { motion, AnimatePresence } from "motion/react";
import { FaFilter } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { displayStar } from "../utils/reviewCalculation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bookActions } from "../store/bookReducer";
export default function FilterSideBar({ active, togglerFunc }) {
  const ratings = [
    "Default Rating",
    displayStar(5),
    displayStar(4),
    displayStar(3),
    displayStar(2),
    displayStar(1),
  ];

  const categories = [
    "Default Category",
    "Self help",
    "Productivity",
    "Psychology",
    "Memoir",
    "Science Fiction",
    "Narrative",
  ];

  const authors = [
    "Default Author",
    "Mark Manson",
    "Robert Greene",
    "James Clear",
    "Nepoleaon Hill",
    "Tony Robbins",
    "William Shakespeare",
  ];

  const dispatch = useDispatch();

  const [selectedFilters, setSelectedFilters] = useState({
    rating: "Default Rating",
    category: "Default Category",
    author: "Default Author",
  });

  const handleChange = (event) => {
    const inputVal = event.target.name;
    const inputName = removeNumber(event.target.id);
    setSelectedFilters((prev) => {
      return { ...prev, [inputVal]: inputName };
    });
    const newSelectedFilters = { ...selectedFilters, [inputVal]: inputName };
    dispatch(bookActions.filterBook(newSelectedFilters));
  };

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.aside
            initial={active ? { opacity: 0, width: "0rem" } : {}}
            animate={
              active
                ? {
                    opacity: 1,
                    width: window.innerWidth > 640 ? "19rem" : "100%",
                  }
                : {}
            }
            exit={active ? { opacity: 0, width: "0rem" } : {}}
            className="h-full fixed top-0 border-r border-r-gray-500 bg-white transition overflow-hidden z-30 overflow-y-scroll"
          >
            <button
              onClick={togglerFunc}
              className={`ml-auto mt-5 mr-5 flex justify-center items-center text-4xl text-gray-600 hover:scale-95`}
            >
              <IoCloseCircleOutline />
            </button>
            <h1 className="text-3xl font-bold mb-5 text-center mt-5">
              Filters
            </h1>
            <FilterSection
              handleChange={handleChange}
              arr={ratings}
              title={"Rating"}
            />
            <FilterSection
              handleChange={handleChange}
              arr={categories}
              title={"Category"}
            />
            {/* <FilterSection
              handleChange={handleChange}
              arr={authors}
              title={"Authors"}
            /> */}
          </motion.aside>
        )}
      </AnimatePresence>
      <button
        onClick={togglerFunc}
        title="Book Filter"
        className={`ml-auto mt-5 mr-5 flex justify-center items-center size-10  border text-2xl p-2 rounded bg-white sticky top-30 right-0 z-20`}
      >
        <FaFilter />
      </button>
    </>
  );
}

const removeNumber = (str) => {
  // dont remove number if the input name is rating
  if (str.indexOf("rating") === 0) {
    return str;
  } else {
    // remove index. for example:"-1" or "-2"
    return str.slice(0, str.indexOf("-"));
  }
};

const FilterSection = ({ arr, title, handleChange }) => {
  return (
    <section className="mx-auto mb-10 pl-20 min-sm:pl-17">
      <h2 className="text-xl font-semibold indent-5 mb-1">{title}</h2>
      <ul className="[&>li]:flex [&>li]:gap-1 space-y-3 pt-3">
        {arr.map((filter, i) => {
          let id = `${filter}-${i}`;

          if (typeof filter === "object") {
            id = `rating-${i}`;
          }

          return (
            <li
              key={i}
              className={`hover:font-bold transition ${
                typeof filter === "object" && "hover:scale-105"
              }`}
            >
              <input
                type="radio"
                name={title.toLowerCase()}
                id={id}
                defaultChecked={filter === arr[0]}
                onChange={handleChange}
              />
              <label
                htmlFor={id}
                className={`${
                  filter === arr[0] ? "text-sm" : "text-lg"
                } truncate`}
              >
                {filter}
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
