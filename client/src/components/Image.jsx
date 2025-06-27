export default function Image({ src, title }) {
  return (
    <img
      className="h-70 md:h-60 lg:h-40 mx-auto mt-2 shadow-md"
      src={src}
      alt={title + " image"}
    />
  );
}
