import { MdOutlineStarPurple500, MdOutlineStarOutline } from "react-icons/md";
import { IoIosStarHalf } from "react-icons/io";

// ⭐ Display visual stars (5-star scale)
const displayStar = (ratingOutOf5) => {
  const stars = [];
  const fullStars = Math.floor(ratingOutOf5);
  const hasHalfStar = ratingOutOf5 % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<MdOutlineStarPurple500 key={`full-${i}`} />);
  }

  if (hasHalfStar) {
    stars.push(<IoIosStarHalf key="half" />);
  }

  while (stars.length < 5) {
    stars.push(<MdOutlineStarOutline key={`empty-${stars.length}`} />);
  }

  return (
    <div className="flex items-center text-yellow-700 dark:text-yellow-400">
      {stars}
    </div>
  );
};

// 🧮 Calculate average from 0–10 then convert to 5-star
const calculateAverageRating = (reviews) => {
  const totalStars = reviews.reduce((acc, review) => acc + review.stars, 0);
  const averageOutOf10 = totalStars / reviews.length;
  const averageOutOf5 = (averageOutOf10 / 10) * 5;
  return averageOutOf5.toFixed(2);
};

function getDiscountedPrice(price, discount) {
  if (discount && typeof discount === "number") {
    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;
    return parseFloat(finalPrice.toFixed(2));
  }
  return price;
}

export { displayStar, calculateAverageRating, getDiscountedPrice };
