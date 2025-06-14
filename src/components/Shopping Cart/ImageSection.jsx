const ImageSection = ({ book }) => {
  return (
    <section className=" my-auto mb-auto shadow shadow-gray-500 w-[7rem] min-[740px]:w-[10rem]">
      <img src={book.image} title={book.title} className="w-full h-full" />
    </section>
  );
};

export default ImageSection;
