import { format } from "date-fns";

const DateTime = ({ datetime, classExtension, noMargins = false }) => {
  return (
    <h3
      className={`font-semibold text-xs ${
        !noMargins && "min-[366px]:ml-auto max-[366px]:mb-5"
      } ${classExtension}`}
    >
      {format(datetime, "PPpp")}
    </h3>
  );
};
export default DateTime;
