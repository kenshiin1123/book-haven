import { motion, AnimatePresence } from "motion/react";
import { FaFilter } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function FilterSideBar({ active, togglerFunc }) {
  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.aside
            initial={active ? { opacity: 0, width: "0rem" } : {}}
            animate={active ? { opacity: 1, width: "15rem" } : {}}
            exit={active ? { opacity: 0, width: "0rem" } : {}}
            className="h-full fixed top-0 border-r border-r-gray-500 bg-white transition overflow-hidden"
          >
            <button
              onClick={togglerFunc}
              className={`ml-auto mt-5 mr-5 flex justify-center items-center text-4xl text-gray-600 hover:scale-95`}
            >
              <IoCloseCircleOutline />
            </button>
            Hello World
          </motion.aside>
        )}
      </AnimatePresence>
      <button
        onClick={togglerFunc}
        className={`ml-auto mt-5 mr-5 flex justify-center items-center size-10  border text-2xl p-2 rounded bg-white`}
      >
        <FaFilter />
      </button>
    </>
  );
}
