import { RiBookShelfLine } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { Link, redirect, useSubmit } from "react-router";
import { toast } from "sonner";

const confirmToast = async () => {
  return new Promise((resolve) => {
    toast(
      <span className="font-semibold text-red-600">
        Are you sure you want to logout?
      </span>,
      {
        action: {
          label: "Yes",
          onClick: () => resolve(true),
        },
        cancel: {
          label: "No",
          onClick: () => resolve(false),
        },
      }
    );
  });
};

const LinksSection = ({ token }) => {
  const submit = useSubmit();

  const handleLogout = async () => {
    let logout = await confirmToast();
    if (logout) {
      submit(null, { method: "post", action: "/logout" });
      return redirect("/");
    } else {
      return;
    }
  };

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
        {token ? (
          <button
            to={"/logout"}
            onClick={handleLogout}
            className="text-white ml-auto"
          >
            Logout
          </button>
        ) : (
          <>
            <li className="ml-auto">
              <Link to={"/register"}>Register</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </>
        )}
      </ul>
    </section>
  );
};
export default LinksSection;
