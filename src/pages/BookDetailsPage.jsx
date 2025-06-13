import { useParams } from "react-router";
import books from "../data/books";
import Image from "../components/Image";
import BookCategoriesDisplay from "../components/BookCategoriesDisplay";
import AuthorNPubYearDisplay from "../components/AuthorNPubYearDisplay";
import RatingStarDisplay from "../components/RatingStarDisplay";
import PriceDisplay from "../components/PriceDisplay";
import { QuantityInput } from "../components/LabelNInput";
import { useEffect, useRef, useState } from "react";
import Button, { ButtonOutlined } from "../components/Button";
import BookReview from "../components/BookReview";

export default function BookDetailsPage() {
  const bookDetailsRef = useRef();
  const { bookId } = useParams();
  const book = books.find((book) => String(book._id) === String(bookId));

  useEffect(() => {
    const root = document.querySelector("#root");
    root.scrollTo(0, 0);
  }, []);

  return (
    <main className="mb-10 space-y-5 flex flex-col" ref={bookDetailsRef}>
      <BookDetails book={book} />
      <BookReviews reviews={book.reviews} />
    </main>
  );
}

const BookDetails = ({ book }) => {
  const [quantity, setQuantity] = useState(1);

  const buttonsAdditionalClass = "h-10 md:w-40 md:h-12";

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((q) => parseInt(q) - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity((q) => parseInt(q) + 1);
  };

  return (
    <>
      <div className="mt-10 flex flex-col sm:flex-row w-[90%] mx-auto">
        <Container classExtension={" sm:w-[18rem] md:w-[20rem]"}>
          <img
            src={book.image}
            alt={book.title}
            className="w-60 sm:w-70 mx-auto mt-2 shadow-md shadow-gray-600"
          />
        </Container>
        <hr className="sm:hidden mb-5 mt-10 border-t-gray-400" />
        <Container classExtension={"mt-auto sm:w-96"}>
          <BookCategoriesDisplay categories={book.category} truncate={false} />
          <p className="font-semibold text-xl sm:text-3xl" title={book.title}>
            {book.title}
          </p>
          <AuthorNPubYearDisplay author={book.author} year={book.year} />
          <RatingStarDisplay reviews={book.reviews} />
          <section className="mt-3 flex justify-between max-[390px]:gap-3 max-[390px]:flex-col sm:flex-col-reverse sm:gap-3">
            <PriceDisplay discount={book.discount} price={book.price} />
            <QuantityInput
              quantity={quantity}
              setQuantity={setQuantity}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
            />
          </section>
          <section className="space-x-3 max-sm:mx-auto w-fit mt-10 max-[390px]:flex max-[390px]:gap-2 max-[390px]:flex-col max-[390px]:[&>button]:w-full max-[390px]:w-full">
            <ButtonOutlined classExtension={buttonsAdditionalClass}>
              Add To Cart
            </ButtonOutlined>
            <Button classExtension={buttonsAdditionalClass}>Buy Book</Button>
          </section>
        </Container>
      </div>
      <hr className="mb-5 mt-5 border-t-gray-400" />
      <Container classExtension={"w-[90%] mx-auto"}>
        <H2>Book Description</H2>
        <p className="text-justify mt-5 sm:w-[90%] md:w-[70%]">
          {book.description}
        </p>
      </Container>
    </>
  );
};

const BookReviews = ({ reviews }) => {
  return (
    <>
      <hr className=" mb-5 mt-10 border-t-gray-400" />
      <Container classExtension={"w-[90%] mx-auto"}>
        <H2>Book Reviews</H2>
        <div className="flex flex-col gap-5 mt-10">
          {reviews.map((r, i) => {
            return <BookReview review={r} key={i} />;
          })}
        </div>
      </Container>
    </>
  );
};

const Container = ({ children, classExtension }) => {
  return <div className={`mx-5 ${classExtension}`}>{children}</div>;
};

const H2 = ({ children }) => {
  return <h2 className="font-bold text-xl">{children}</h2>;
};
