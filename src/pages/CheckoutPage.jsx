import { useEffect } from "react";
import userData from "../data/userData";
import InnerContainer from "../components/Shopping Cart/InnerContainer";
import ImageSection from "../components/Shopping Cart/ImageSection";
import books from "../data/books";
import { getDiscountedPrice } from "../utils/reviewCalculation";
import { Link } from "react-router";
import Button from "../components/Button";

export default function CheckoutPage() {
  useEffect(() => {
    document.title = "Checkout - Book Haven";
  });
  return (
    <main className="flex flex-col gap-5 sm:px-5.5 mb-10">
      <h1 className="text-3xl mx-auto mt-10 font-bold">Checkout</h1>
      <div className="flex p-5 flex-col w-full justify-end  bg-white border border-gray-500">
        <h2 className="text-xl font-semibold">Delivery Address</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos,
          sed officiis laboriosam maxime fugiat? Illum pariatur laborum
        </p>
        <button className="border px-2 text-blue-500 ml-auto mt-4 active:scale-95">
          Change
        </button>
      </div>
      <h2 className="text-xl font-semibold ml-5">Books Ordered</h2>
      {userData.checkout.map((item, i) => {
        const book = books.find((book) => book._id === item._id);
        const discountedPrice = getDiscountedPrice(book.price, book.discount);
        return (
          <div className="border border-gray-500 flex gap-2 bg-white" key={i}>
            <InnerContainer>
              <ImageSection book={book} />
              <section className="font-semibold flex flex-col grow">
                <div className="flex justify-between relative">
                  <Link
                    to={`/books/${book._id}`}
                    className="text-md sm:text-xl"
                  >
                    {book.title}
                  </Link>
                </div>
                <h3 className="text-sm text-gray-600 mb-10">{book.author}</h3>
                <div className="flex mt-auto justify-between">
                  <section className="space-x-5">
                    <span className=" text-xs sm:text-sm">Quantity</span>
                    <span className="text-lg sm:text-xl">{item.quantity}</span>
                  </section>
                  <section className="">
                    <span className="text-lg sm:text-xl">
                      ${(discountedPrice * item.quantity).toFixed(2)}
                    </span>
                  </section>
                </div>
              </section>
            </InnerContainer>
          </div>
        );
      })}
      <div className="flex flex-col w-full justify-end  bg-white border border-gray-500">
        <div className="flex justify-between border-b p-5">
          <h2 className="text-lg font-semibold">Payment Method</h2>
          <select name="" id="" className="border px-1 sm:px-3 py-1">
            <option value="cod">Cash On Delivery</option>
            <option value="credit">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="gcash">GCash</option>
          </select>
        </div>
        <div className="ml-auto my-5 p-5">
          <section className="space-x-5 flex items-center justify-between min-w-43">
            <span className=" text-xs sm:text-sm">Book Total</span>
            <span className="text-lg">$500</span>
          </section>
          <section className="space-x-5 flex items-center justify-between min-w-43">
            <span className=" text-xs sm:text-sm">Shipping Fee</span>
            <span className="text-lg">$500</span>
          </section>
          <section className="space-x-5 flex items-center justify-between min-w-43">
            <span className=" text-xs sm:text-sm">Total Payment</span>
            <span className="text-lg">$500</span>
          </section>
        </div>
        <Button classExtension={"w-40 h-15 text-xl ml-auto mr-5 mb-5"}>
          Place Order
        </Button>
      </div>
    </main>
  );
}
