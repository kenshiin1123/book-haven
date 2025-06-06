import PasswordInput from "./PasswordInput";

export default function idNInput({
  type = "text",
  name,
  classNameExtension,
  id,
}) {
  const capitalizedFirstLetter = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className={`flex flex-col w-full ${classNameExtension}`}>
      <label htmlFor={name} className="font-semibold">
        {capitalizedFirstLetter}
      </label>
      {type === "password" ? (
        <PasswordInput name={name} id={id} />
      ) : (
        <input
          type={type}
          id={id || name}
          className="border w-full py-1 px-1"
        />
      )}
    </div>
  );
}
