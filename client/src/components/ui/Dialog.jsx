export default function Dialog({ children, ref }) {
  return (
    <dialog
      ref={ref}
      className="min-h-70 w-[90%] sm:w-100 mx-auto my-auto p-5 space-y-5 color-3"
    >
      {children}
    </dialog>
  );
}
