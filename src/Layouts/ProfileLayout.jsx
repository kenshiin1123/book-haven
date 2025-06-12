import { Outlet, useLocation, Link } from "react-router";
export default function ProfileLayout() {
  const location = useLocation().pathname;

  let headerName = "Account";

  if (location === "/account/profile") {
    headerName = "Profile";
  } else if (location === "/account/purchases") {
    headerName = "Purchases";
  } else if (location === "/account/settings") {
    headerName = "Settings";
  }

  const links = [
    { to: "/account/profile", title: "Personal Details" },
    { to: "/account/purchases", title: "Purchases" },
    { to: "/account/settings", title: "Settings" },
  ];

  return (
    <>
      <main className="flex flex-col mt-10 gap-3">
        <section className="flex w-full mb-5">
          <h1 className="mx-auto text-center font-bold text-3xl">
            {headerName}
          </h1>
        </section>
        <section className="border w-fit mx-auto p-1">
          <ul className="flex gap-2.5 [&>li]:px-1">
            {links.map((link) => {
              return <CustomNavLink link={link} key={link.title} />;
            })}
          </ul>
        </section>
        <Outlet />
      </main>
    </>
  );
}

const CustomNavLink = ({ link }) => {
  const location = useLocation().pathname;

  let activeClass = "border border-white";
  if (link.to === location) {
    activeClass = "border";
  }

  return (
    <li className={`${activeClass} text-sm sm:text-lg md:text-xl`}>
      <Link to={link.to}>{link.title}</Link>
    </li>
  );
};
