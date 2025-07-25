export default function HorizontalRule({ children }) {
  return (
    <div className="flex items-center my-1 color-3">
      <hr className="flex-grow border-t" />
      <span className="mx-3 ">{children}</span>
      <hr className="flex-grow border-t" />
    </div>
  );
}
