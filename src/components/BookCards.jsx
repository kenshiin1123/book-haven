import {
  calculateAverageRating,
  displayStar,
  getDiscountedPrice,
} from "../utils/reviewCalculation";

import { ButtonOutlined } from "./Button";

export default function BookCards({ books }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {books.map((b, i) => {
        return <BookCard {...b} key={i} />;
      })}
    </div>
  );
}

const BookCard = ({ ...props }) => {
  const { image, title, reviews, discount, price } = { ...props };

  const averageReview = calculateAverageRating(reviews);
  const stars = displayStar(averageReview);
  const totalReviews = reviews.length;

  const discountedPrice = getDiscountedPrice(price, discount);
  return (
    <div className="flex flex-col border w-80 p-3 h-fit ">
      <img
        className="w-40 mx-auto mt-5 shadow-md shadow-gray-600 "
        src={image}
        alt={title + " image"}
      />
      <p className="font-semibold mt-10 text-xl">{title}</p>
      <div className="text-sm flex gap-1 mt-1">
        <span className="font-bold">{averageReview}</span> {stars}{" "}
        <span className="text-sm">({totalReviews})</span>
      </div>
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
