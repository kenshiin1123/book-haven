export default function AuthorNPubYearDisplay({ author, year }) {
  return (
    <section className="my-3 font-medium text-xs sm:text-md">
      <p className="font-medium" title={author}>
        Author: <b>{author}</b>
      </p>
      <p className="" title={year}>
        Publication Year: <b>{year}</b>
      </p>
    </section>
  );
}
