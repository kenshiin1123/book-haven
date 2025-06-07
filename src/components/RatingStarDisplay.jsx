import {
  calculateAverageRating,
  displayStar,
} from "../utils/reviewCalculation";

export default function RatingStarDisplay({ reviews }) {
  const averageReview = calculateAverageRating(reviews);
  const stars = displayStar(averageReview);
  const totalReviews = reviews.length;

  return (
    <div className="text-sm flex gap-1 mt-1">
      <span className="font-bold">{averageReview}</span> {stars}{" "}
      <span className="text-sm">({totalReviews})</span>
    </div>
  );
}
