export default function Form({ children, handleSubmit, legend }) {
  return (
    <form
      className="mx-auto w-full p-6 mt-5 sm:border sm:w-[33rem] color-3"
      onSubmit={handleSubmit}
    >
      <fieldset className="flex flex-col gap-5">
        <legend className="text-3xl font-semibold mb-10 mx-auto">
          {legend}
        </legend>
        {children}
      </fieldset>
    </form>
  );
}
