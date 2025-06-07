import { useNavigate } from "react-router";
import {
  calculateAverageRating,
  displayStar,
  getDiscountedPrice,
} from "../utils/reviewCalculation";

import { ButtonOutlined } from "./Button";
import Image from "./Image";
import PriceDisplay from "./PriceDisplay";
import RatingStarDisplay from "./RatingStarDisplay";
import AuthorNPubYearDisplay from "./AuthorNPubYearDisplay";
import BookCategoriesDisplay from "./BookCategoriesDisplay";
const BookCard = ({ ...props }) => {
  const navigate = useNavigate();
  const {
    image,
    title,
    reviews,
    discount,
    price,
    author,
    year,
    _id,
    category,
  } = {
    ...props,
  };

  const handleViewBook = () => {
    navigate(`/books/${_id}`);
  };
  return (
    <div className="flex flex-col w-80 p-3 h-fit border border-gray-400">
      <Image title={title} src={image} />
      <p className="font-semibold mt-10 text-xl truncate" title={title}>
        <BookCategoriesDisplay categories={category} />
        {title}
      </p>
      <RatingStarDisplay reviews={reviews} />
      <AuthorNPubYearDisplay author={author} year={year} />
      <section className="flex justify-between mt-5">
        <PriceDisplay discount={discount} price={price} />
        <ButtonOutlined onClick={handleViewBook}>View Book</ButtonOutlined>
      </section>
    </div>
  );
};

export default BookCard;
