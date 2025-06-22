import { getDiscountedPrice } from "../../utils/reviewCalculation";
import { Link } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function PurchasesPage() {
  const userData = useSelector((state) => state.user);

  useEffect(() => {
    document.title = "Purchases - Book Haven";
  });

  return (
    <div className="flex flex-col gap-5 px-5.5 mb-10">
      {userData.purchases.map((p, i) => {
        return <PurchasedBook p={p} key={i} />;
      })}
    </div>
  );
}

const PurchasedBook = ({ p }) => {
  const books = useSelector((state) => state.book.books);
  const book = books.find((book) => book._id === p._id);
  const discountedPrice = getDiscountedPrice(book.price, book.discount);
  return (
    <MainContainer>
      <Status status={p.status} />
      <InnerContainer>
        <ImageSection book={book} />
        <PurchasedDetails book={book} discountedPrice={discountedPrice} p={p} />
      </InnerContainer>
    </MainContainer>
  );
};

const MainContainer = ({ children }) => {
  return <div className="border color-3">{children}</div>;
};
const InnerContainer = ({ children }) => {
  return <div className="flex p-1 gap-3 sm:p-4">{children}</div>;
};

const Status = ({ status }) => {
  // make first letter bigger
  const modifiedStatus =
    status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
  return <div className={`p-2 border-b font-bold `}>{modifiedStatus}</div>;
};

const ImageSection = ({ book }) => {
  return (
    <section className=" my-auto mb-auto shadow shadow-gray-500 w-[7rem] sm:w-[10rem]">
      <img src={book.image} title={book.title} className="w-full h-full" />
    </section>
  );
};

const PurchasedDetails = ({ book, p, discountedPrice }) => {
  return (
    <section className="font-semibold flex flex-col grow">
      <Link to={`/books/${book._id}`} className="text-md sm:text-xl">
        {book.title}
      </Link>
      <h3 className="text-sm mb-10">{book.author}</h3>
      <div className="text-xs  flex justify-end mt-auto">
        <span
          className="text-md sm:text-lg cursor-help"
          title="Price multiplied by the quantity"
        >
          ${discountedPrice} x {p.quantity}
        </span>
      </div>
      <div className="text-xs flex justify-between mt-2">
        <span className="mt-auto sm:text-lg">Quantity {p.quantity}</span>
        <span className="text-base sm:text-2xl cursor-help" title="Total price">
          ${discountedPrice * p.quantity}
        </span>
      </div>
    </section>
  );
};
