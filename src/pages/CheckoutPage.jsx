import InnerContainer from "../components/Shopping Cart/InnerContainer";
import ImageSection from "../components/Shopping Cart/ImageSection";
import books from "../data/books";
import { getDiscountedPrice } from "../utils/reviewCalculation";
import { Link } from "react-router";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import InfoWButton from "../components/InfoWButton";
export default function CheckoutPage() {
  const user = useSelector((state) => state.user);
  const address = user.address;
  const checkoutItems = user.checkout;

  return (
    <main className="flex flex-col gap-5 sm:px-5.5 mb-10">
      <h1 className="text-3xl mx-auto mt-10 font-bold">Checkout</h1>
      {checkoutItems.length > 0 ? (
        <>
          <DeliverySelectionDisplay address={address} />
          <h2 className="text-xl font-semibold ml-5">Books Ordered</h2>
          <CheckoutItems checkoutItems={checkoutItems} />
          <div className="flex flex-col w-full justify-end border color-3">
            <PaymentMethodSection />
            <AmountSection />
            <Button classExtension={"w-40 h-15 text-xl ml-auto mr-5 mb-5"}>
              Place Order
            </Button>
          </div>
        </>
      ) : (
        <InfoWButton
          buttonName={"Browse Books"}
          title={"No items to checkout yet."}
          navigateTo={"/books"}
        />
      )}
    </main>
  );
}

const DeliverySelectionDisplay = ({ address }) => {
  return (
    <div className="flex p-5 flex-col w-full justify-end color-3 border">
      <h2 className="text-xl font-semibold">Delivery Address</h2>
      <p>{address}</p>
    </div>
  );
};

const CheckoutItems = ({ checkoutItems }) => {
  return checkoutItems.map((item, i) => {
    const book = books.find((book) => book._id === item._id);
    const discountedPrice = getDiscountedPrice(book.price, book.discount);
    const price = (discountedPrice * item.quantity).toFixed(2);
    return (
      <div className="border color-3 flex gap-2 " key={i}>
        <InnerContainer>
          <ImageSection book={book} />
          <section className="font-semibold flex flex-col grow">
            <div className="flex justify-between relative">
              <Link to={`/books/${book._id}`} className="text-md sm:text-xl">
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
                <span className="text-lg sm:text-xl">${price}</span>
              </section>
            </div>
          </section>
        </InnerContainer>
      </div>
    );
  });
};

const PaymentMethodSection = () => {
  const paymentMethods = [
    { value: "cod", label: "Cash On Delivery" },
    { value: "credit", label: "Credit Card" },
    { value: "paypal", label: "PayPal" },
    { value: "gcash", label: "GCash" },
  ];

  return (
    <section className="flex justify-between border-b p-5">
      <h2 className="text-lg font-semibold">Payment Method</h2>
      <select name="" id="" className="border px-1 sm:px-3 py-1">
        {paymentMethods.map((method) => (
          <option
            key={method.value}
            value={method.value}
            disabled={method.value !== "cod"}
          >
            {method.label}
          </option>
        ))}
      </select>
    </section>
  );
};

const AmountSection = () => {
  const checkout = useSelector((state) => state.user.checkout);
  const books = useSelector((state) => state.book.books);

  const totalPrice = checkout.reduce((total, item) => {
    const foundBook = books.find((b) => item._id === b._id);
    return total + (foundBook?.price * item.quantity || 0);
  }, 0);

  const amounts = [
    { label: "Book Total", value: `$${totalPrice.toFixed(2)}` },
    { label: "Shipping Fee", value: `$2` },
    { label: "Total Payment", value: `$${(totalPrice + 2).toFixed(2)}` },
  ];

  return (
    <section className="ml-auto my-5 p-5">
      {amounts.map((item, idx) => (
        <div
          className="space-x-5 flex items-center justify-between min-w-43"
          key={idx}
        >
          <span className=" text-xs sm:text-sm">{item.label}</span>
          <span className="text-lg">{item.value}</span>
        </div>
      ))}
    </section>
  );
};
