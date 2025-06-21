export default function HorizontalRule({ children }) {
  return (
    <div className="flex items-center my-1">
      <hr className="flex-grow border-t" />
      <span className="mx-3 text-gray-500">{children}</span>
      <hr className="flex-grow border-t" />
    </div>
  );
}
