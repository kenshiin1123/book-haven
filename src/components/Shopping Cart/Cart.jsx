import books from "../../data/books";
import { getDiscountedPrice } from "../../utils/reviewCalculation";

import MainContainer from "./MainContainer";
import InnerContainer from "./InnerContainer";
import CartDetails from "./CartDetails";
import ImageSection from "./ImageSection";

const Cart = ({ item }) => {
  const book = books.find((book) => book._id === item._id);
  const discountedPrice = getDiscountedPrice(book.price, book.discount);
  return (
    <MainContainer>
      <InnerContainer>
        <ImageSection book={book} />
        <CartDetails
          book={book}
          discountedPrice={discountedPrice}
          item={item}
        />
      </InnerContainer>
    </MainContainer>
  );
};

export default Cart;
