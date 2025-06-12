import { motion, AnimatePresence } from "motion/react";
import { FaFilter } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { displayStar } from "../utils/reviewCalculation";
export default function FilterSideBar({ active, togglerFunc }) {
  const ratings = [
    displayStar(5),
    displayStar(4),
    displayStar(3),
    displayStar(2),
    displayStar(1),
  ];

  const genres = [
    "Self-help",
    "Novel",
    "Mystery",
    "Historical Fiction",
    "Science Fiction",
    "Narrative",
  ];

  const authors = [
    "Mark Manson",
    "Robert Greene",
    "James Clear",
    "Nepoleaon Hill",
    "Tony Robbins",
    "William Shakespeare",
  ];

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
                    width: window.innerWidth > 640 ? "15rem" : "100%",
                  }
                : {}
            }
            exit={active ? { opacity: 0, width: "0rem" } : {}}
            className="h-full fixed top-0 border-r border-r-gray-500 bg-white transition overflow-hidden z-30 overflow-y-scroll"
          >
            {window.innerWidth < 640 && (
              <button
                onClick={togglerFunc}
                className={`ml-auto mt-5 mr-5 flex justify-center items-center text-4xl text-gray-600 hover:scale-95`}
              >
                <IoCloseCircleOutline />
              </button>
            )}
            <div className="flex justify-center items-center h-25 text-xl font-bold">
              Book Haven
            </div>
            <h1 className="text-3xl font-bold mb-5 text-center">Filters</h1>
            <FilterSection arr={ratings} title={"Rating"} />
            <FilterSection arr={genres} title={"Genre"} />
            <FilterSection arr={authors} title={"Authors"} />
          </motion.aside>
        )}
      </AnimatePresence>
      <button
        onClick={togglerFunc}
        className={`ml-auto mt-5 mr-5 flex justify-center items-center size-10  border text-2xl p-2 rounded bg-white sticky top-30 right-0 z-20`}
      >
        <FaFilter />
      </button>
    </>
  );
}

const FilterSection = ({ arr, title }) => {
  return (
    <section className="mx-auto mb-10 pl-20 min-sm:pl-10">
      <h2 className="text-xl font-semibold indent-5 mb-1">{title}</h2>
      <ul className="[&>li]:flex [&>li]:gap-1 space-y-3 pt-3">
        {arr.map((genre, i) => {
          return (
            <li key={i}>
              <input
                type="radio"
                name={title.toLowerCase()}
                id={`${genre}+${i}`}
              />{" "}
              <label htmlFor={`${genre}+${i}`}>{genre}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
