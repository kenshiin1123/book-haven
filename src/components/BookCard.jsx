import { useNavigate } from "react-router";
import { ButtonOutlined } from "./Button";
import Image from "./Image";
import PriceDisplay from "./PriceDisplay";
import RatingStarDisplay from "./RatingStarDisplay";
import AuthorNPubYearDisplay from "./AuthorNPubYearDisplay";
import BookCategoriesDisplay from "./BookCategoriesDisplay";
import { MdAddShoppingCart, MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useState } from "react";
const BookCard = ({ ...props }) => {
  const [addToCart, setAddToCart] = useState(false);
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

  const toggleAddToCart = () => {
    setAddToCart((prev) => !prev);
  };

  return (
    <div className="flex flex-col w-80 p-3 h-fit border border-gray-400 relative">
      <button
        className="text-3xl absolute right-5 top-5 active:scale-95"
        onClick={toggleAddToCart}
      >
        {addToCart ? (
          <MdOutlineRemoveShoppingCart className="text-gray-500 scale-90" />
        ) : (
          <MdAddShoppingCart />
        )}
      </button>
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
