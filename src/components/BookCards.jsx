import {
  calculateAverageRating,
  displayStar,
  getDiscountedPrice,
} from "../utils/reviewCalculation";

import { ButtonOutlined } from "./Button";

export default function BookCards({ books }) {
  return (
    <div className="flex flex-wrap max-md:gap-5 min-md:gap-2 w-fit mx-auto justify-center min-sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((b, i) => {
        return <BookCard {...b} key={i} />;
      })}
    </div>
  );
}

const BookCard = ({ ...props }) => {
  const { image, title, reviews, discount, price, author, year } = { ...props };

  const averageReview = calculateAverageRating(reviews);
  const stars = displayStar(averageReview);
  const totalReviews = reviews.length;

  const discountedPrice = getDiscountedPrice(price, discount);
  return (
    <div className="flex flex-col w-80 p-3 h-fit border border-gray-400">
      <img
        className="h-70 md:h-60 lg:h-40 mx-auto mt-2 shadow-md shadow-gray-600 "
        src={image}
        alt={title + " image"}
      />
      <p className="font-semibold mt-10 text-xl truncate">{title}</p>
      <div className="text-sm flex gap-1 mt-1">
        <span className="font-bold">{averageReview}</span> {stars}{" "}
        <span className="text-sm">({totalReviews})</span>
      </div>
      <section className="mt-3 font-medium text-xs">
        <p className="font-medium">
          Author: <b>{author}</b>
        </p>
        <p className="">
          Publication Year: <b>{year}</b>
        </p>
      </section>
      <section className="flex justify-between mt-5">
        <div className="text-2xl flex gap-1 items-center">
          {!discount ? (
            <span className="font-bold">${price}</span>
          ) : (
            <>
              <span className="font-bold">${discountedPrice}</span>
              <span className="text-sm line-through">${price}</span>
            </>
          )}
          {/* Original Price */}
        </div>
        <ButtonOutlined>View Book</ButtonOutlined>
      </section>
    </div>
  );
};
