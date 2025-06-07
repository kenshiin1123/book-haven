import BookCard from "./BookCard";

export default function BookCards({ books }) {
  return (
    <div className="flex flex-wrap max-md:gap-5 min-md:gap-2 w-fit mx-auto justify-center min-sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((b) => {
        return <BookCard {...b} key={b._id} />;
      })}
    </div>
  );
}
