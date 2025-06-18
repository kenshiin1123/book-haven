import { Link } from "react-router";
import { QuantityInput } from "../LabelNInput";
import { MdDelete } from "react-icons/md";
import useItemQuantity from "../../hooks/useItemQuantity.hook";
const CartDetails = ({ book, item, discountedPrice, deleteFunc }) => {
  const { quantity, handleDecrement, handleIncrement, setQuantity } =
    useItemQuantity(book, item.quantity);

  return (
    <section className="font-semibold flex flex-col grow">
      <div className="flex justify-between relative">
        <Link to={`/books/${book._id}`} className="text-md sm:text-xl">
          {book.title}
        </Link>
        <button
          className="size-6 my-auto ml-3 absolute right-3 top-3 text-2xl active:scale-85"
          onClick={() => deleteFunc(item._id)}
        >
          <MdDelete />
        </button>
      </div>

      <h3 className="text-sm text-gray-600 mb-10">{book.author}</h3>

      <div className="min-[740px]:h-10 flex flex-col [&>span]:my-auto justify-between  sm:gap-5 min-[740px]:justify-start mt-auto min-[740px]:flex-row">
        <QuantityInput
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          quantity={quantity}
          setQuantity={setQuantity}
        />
        <div className="min-[740px]:ml-auto w-fit [&>section]:flex [&>section]:justify-between">
          <section className=" flex justify-start  mt-5 gap-5 sm:mt-0 sm:justify-start sm:ml-auto">
            <span className="my-auto text-xs sm:text-sm">
              {quantity > 1 && "Original"} Price
            </span>
            <span className="text-lg sm:text-xl">${discountedPrice}</span>
          </section>
          {quantity > 1 && (
            <section className=" flex justify-start gap-5 sm:justify-start sm:ml-auto">
              <span className="my-auto text-xs sm:text-sm truncate text-ellipsis">
                Calculated Price
              </span>
              <span className="text-lg sm:text-xl">
                ${(discountedPrice * quantity).toFixed(2)}
              </span>
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default CartDetails;
