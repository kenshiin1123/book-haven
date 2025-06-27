import { Link } from "react-router";

const IconLink = ({ icon, to, marginLeftAuto }) => {
  return (
    <li className={`${marginLeftAuto && "ml-auto"}`}>
      <Link
        className={`text-4xl focus:outline-none focus:scale-105 active:scale-95`}
        to={to}
      >
        {icon}
      </Link>
    </li>
  );
};

export default IconLink;
