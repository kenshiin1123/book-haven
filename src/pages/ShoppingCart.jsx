import { useEffect } from "react";
import userData from "../data/userData";
import Cart from "../components/Shopping Cart/Cart";
import Button from "../components/Button";
import { useNavigate } from "react-router";

export default function ShoppingCart() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Shopping Cart - Book Haven";
  });

  return (
    <main className="flex flex-col gap-5 sm:px-5.5 mb-10">
      <h1 className="text-3xl mx-auto mt-10 font-bold">Shopping Cart</h1>
      {userData.cart.length > 1 && (
        <div className="flex h-25 p-5 w-full justify-end sticky top-26 text-white bg-white z-30 border border-gray-500">
          <Button
            onClick={() => navigate("/checkout")}
            classExtension={"text-md sm:text-xl"}
          >
            Checkout
          </Button>
        </div>
      )}
      {userData.cart.map((item, i) => {
        return <Cart item={item} key={i} />;
      })}
    </main>
  );
}
