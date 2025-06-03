import React from "react";

export default function BookCards({ books }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {books.map((b, i) => {
        return <BookCard {...b} key={i} />;
      })}
    </div>
  );
}

const BookCard = ({
  title,
  author,
  ratings,
  price,
  addedToCart,
  year,
  image,
}) => {
  return (
    <div className="flex flex-col border w-80 p-3 h-fit">
      <img
        className="w-40 mx-auto mt-5 shadow-md shadow-gray-600 "
        src={image}
        alt={title + " image"}
      />
      <p className="font-semibold mt-10">{title}</p>
      <p className="text-sm">Ratings: {ratings}</p>
      <section className="flex justify-between mt-5">
        <p className="text-2xl font-bold">${price}</p>{" "}
        <button className="border px-5">View Book</button>
      </section>
    </div>
  );
};
