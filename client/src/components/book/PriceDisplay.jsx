import { getDiscountedPrice } from "../../utils/reviewCalculation";

export default function PriceDisplay({ discount, price }) {
  const discountedPrice = getDiscountedPrice(price, discount);
  return (
    <div className="text-2xl flex gap-1 items-center">
      {!discount ? (
        <span className="font-bold">${price}</span>
      ) : (
        <>
          <span className="font-bold">${discountedPrice}</span>
          {/* Original Price */}
          <span className="text-sm line-through">${price}</span>
        </>
      )}
    </div>
  );
}
