import { RiBookShelfLine } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { Link } from "react-router";

const LinksSection = () => {
  return (
    <section className="mt-4">
      <ul className="flex gap-4 [&>li>a]:font-semibold [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-2 [&>li>a]:hover:underline [&>li>a>svg]:text-xl">
        <li>
          <Link to={"/"}>
            <TiHome /> Home
          </Link>
        </li>
        <li>
          <Link to={"/books"}>
            <RiBookShelfLine /> Books
          </Link>
        </li>
        <li className="ml-auto">
          <Link to={"/register"}>Register</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </section>
  );
};
export default LinksSection;
