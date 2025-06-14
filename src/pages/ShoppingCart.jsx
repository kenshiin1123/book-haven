import { useEffect } from "react";
import userData from "../data/userData";
import Cart from "../components/Shopping Cart/Cart";
import Button from "../components/Button";

export default function ShoppingCart() {
  useEffect(() => {
    document.title = "Purchases - Book Haven";
  });

  return (
    <>
      <div className="flex flex-col gap-5 sm:px-5.5 mb-10">
        <h1 className="text-3xl mx-auto mt-10 font-bold">Shopping Cart</h1>
        {userData.cart.map((item, i) => {
          return <Cart item={item} key={i} />;
        })}
      </div>
      <div className="border-t flex h-30 mt-5 p-5 justify-end sticky bottom-0 bg-white">
        <Button classExtension={"text-2xl p-3"}>Checkout</Button>
      </div>
    </>
  );
}
