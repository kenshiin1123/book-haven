import { FaRegUserCircle } from "react-icons/fa";
import { format } from "date-fns";
import { displayStar } from "../utils/reviewCalculation";
export default function BookReview({ review }) {
  const star = displayStar(review.stars / 2);
  return (
    <div className="flex flex-col border min-h-60 p-3 color-3">
      <DateTime r={review} classExtension={"min-sm:hidden "} />
      <section className="flex items-center  gap-3">
        <span className="text-3xl">
          <FaRegUserCircle />
        </span>
        <h2 className="font-semibold text-md">{review.username}</h2>
        <DateTime r={review} classExtension={"max-sm:hidden"} />
      </section>
      <section className="flex gap-1 mt-3 font-semibold indent-0.5">
        {review.stars / 2}
        {star}
      </section>
      <p>{review.description}</p>
      <section className="flex mt-5 gap-5 overflow-x-scroll px-5">
        {review.pictures.map((p, i) => {
          return (
            <img
              src={p}
              key={i}
              className="h-60 w-max shadow shadow-gray-600"
            />
          );
        })}
      </section>
    </div>
  );
}

const DateTime = ({ r, classExtension }) => {
  return (
    <h3
      className={`font-semibold text-xs min-[366px]:ml-auto max-[366px]:mb-5 text-gray-800 ${classExtension}`}
    >
      {format(r.datetime, "PPpp")}
    </h3>
  );
};
