import { Link } from "react-router";
import { FaFacebook, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { TiHome } from "react-icons/ti";
import { RiBookShelfLine } from "react-icons/ri";
export default function MainFooter() {
  return (
    <footer className="mt-auto color-2 w-full h-max pb-2 border-t">
      <div className="flex justify-around p-3  [&>section>h2]:text-center [&>section>h2]:flex [&>section>h2]:items-center">
        <ExploreSection />
        <ConnectSection />
      </div>
      <small className="block text-center">
        &copy;2025 Book Haven. All rights reserved.
      </small>
    </footer>
  );
}

const ExploreSection = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Explore</h2>
      <ul className="-translate-x-10 mt-2 font-medium [&>li>a]:hover:underline ">
        <li>
          <Link to={"/"} className="flex items-center gap-1">
            <TiHome />
            Home
          </Link>
        </li>
        <li>
          <Link to={"/books"} className="flex items-center gap-1">
            <RiBookShelfLine />
            Books
          </Link>
        </li>
      </ul>
    </section>
  );
};

const ConnectSection = () => {
  const links = [
    {
      icon: <FaFacebook />,
      name: "Facebook",
      href: "https://www.facebook.com/ivanbarrero23",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/lance-ivan-gil-fernandez-67bb02268/",
    },
    {
      icon: <FaGithubSquare />,
      name: "Github",
      href: "https://github.com/kenshiin1123",
    },
    {
      icon: <BiLogoGmail />,
      name: "Gmail",
      href: "https://mail.google.com/mail/u/0/?fs=1&to=fernandezlanceivangil@gmail.com&tf=cm",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold">Connect</h2>
      <ul className="-translate-x-10 mt-2 [&>li]:flex [&>li]:items-center [&>li]:gap-2 text-md font-medium space-y-1 [&>li>a]:hover:underline ">
        {links.map((link) => (
          <li key={link.name}>
            {link.icon}
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
