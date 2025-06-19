import { useEffect } from "react";
import Cart from "../components/Shopping Cart/Cart";
import Button from "../components/Button";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/userReducer";
import InfoWButton from "../components/InfoWButton";

export default function ShoppingCart() {
  const userData = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Shopping Cart - Book Haven";
  });

  const handleCheckoutClick = () => {
    if (userData.cart.length > 0) {
      dispatch(userActions.checkoutCart());
      navigate("/checkout");
    } else {
      alert("There must be an item to be checkout.");
    }
  };

  return (
    <main className="flex flex-col gap-5 sm:px-5.5 mb-10">
      <h1 className="text-3xl mx-auto mt-10 font-bold">Shopping Cart</h1>
      <CheckoutButton
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

const CheckoutButton = ({ userData, handleCheckoutClick }) => {
  return (
    userData.cart.length > 0 && (
      <div className="flex h-25 p-5 w-full justify-end sticky top-26 text-white bg-white z-30 border border-gray-500">
        <Button
          onClick={handleCheckoutClick}
          classExtension={"text-md sm:text-xl"}
        >
          Checkout
        </Button>
      </div>
    )
  );
};
