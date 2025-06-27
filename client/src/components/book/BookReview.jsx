import { FaRegUserCircle } from "react-icons/fa";
import { displayStar } from "../../utils/reviewCalculation";
import DateTime from "../ui/DateTime";

export default function BookReview({ review }) {
  const star = displayStar(review.stars / 2);
  return (
    <div className="flex flex-col border min-h-60 p-3 color-3">
      <DateTime datetime={review.datetime} classExtension={"min-sm:hidden "} />
      <section className="flex items-center  gap-3">
        <span className="text-3xl">
          <FaRegUserCircle />
        </span>
        <h2 className="font-semibold text-md">{review.username}</h2>
        <DateTime datetime={review.datetime} classExtension={"max-sm:hidden"} />
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
