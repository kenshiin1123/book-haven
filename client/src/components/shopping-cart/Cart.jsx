import { getDiscountedPrice } from "../../utils/reviewCalculation";

import MainContainer from "./MainContainer";
import InnerContainer from "./InnerContainer";
import CartDetails from "./CartDetails";
import ImageSection from "./ImageSection";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/userReducer";
const Cart = ({ item }) => {
  const books = useSelector((state) => state.book.books);
  const book = books.find((book) => book._id === item._id);
  const discountedPrice = getDiscountedPrice(book.price, book.discount);

  const dispatch = useDispatch();
  const handleDeleteItem = (itemId) => {
    dispatch(userActions.removeCart(itemId));
  };

  const handleItemCheck = () => {
    dispatch(userActions.checkItemInCart({ _id: item._id }));
  };

  return (
    <MainContainer handleItemCheck={handleItemCheck} isChecked={item.checked}>
      <InnerContainer>
        <ImageSection book={book} />
        <CartDetails
          book={book}
          discountedPrice={discountedPrice}
          item={item}
          deleteFunc={handleDeleteItem}
        />
      </InnerContainer>
    </MainContainer>
  );
};

export default Cart;
