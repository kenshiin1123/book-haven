import { useEffect } from "react";
import Cart from "../components/shopping-cart/Cart";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/userReducer";
import InfoWButton from "../components/ui/InfoWButton";

export default function ShoppingCart() {
  const userData = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkedItems = userData.cart.filter((item) => item.checked === true);

  useEffect(() => {
    document.title = "Shopping Cart - Book Haven";
  });

  const handleCheckoutClick = () => {
    if (userData.cart.length > 0) {
      dispatch(userActions.checkoutCart(checkedItems));
      navigate("/checkout");
    } else {
      alert("There must be an item to be checkout.");
    }
  };

  return (
    <main className="flex flex-col gap-5 sm:px-5.5 mb-10">
      <h1 className="text-3xl mx-auto mt-10 font-bold">Shopping Cart</h1>
      <CheckoutButton
        checkedItems={checkedItems}
        handleCheckoutClick={handleCheckoutClick}
        userData={userData}
      />
      {userData.cart.map((item, i) => {
        return <Cart item={item} key={i} />;
      })}
      {userData.cart.length < 1 && (
        <InfoWButton
          title={"You haven’t added anything yet."}
          buttonName={"Start Shopping"}
          navigateTo={"/books"}
        />
      )}
    </main>
  );
}

const CheckoutButton = ({ userData, handleCheckoutClick, checkedItems }) => {
  return (
    userData.cart.length > 0 && (
      <div className="flex h-25 p-5 w-full justify-between items-center sticky top-29 color-3  bg-[#303030]/80 backdrop-blur-md z-30 border">
        <h1 className="text-2xl font-bold">
          {checkedItems.length > 0
            ? `${checkedItems.length} item${
                checkedItems.length > 1 ? "s" : ""
              } selected`
            : "Select items to proceed to checkout"}
        </h1>
        {checkedItems.length > 0 && (
          <Button
            onClick={handleCheckoutClick}
            classExtension={"text-md sm:text-xl h-full"}
          >
            Checkout
          </Button>
        )}
      </div>
    )
  );
};
