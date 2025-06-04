import { Link } from "react-router";

export default function MainFooter() {
  return (
    <footer className="mt-auto bg-gray-200/50 w-full min-h-40 pb-2">
      <div className="flex justify-around p-3 [&>section]:w-[30%] [&>section>h2]:text-center">
        <section>
          <h2 className="text-2xl font-semibold">Explore</h2>
          <ul className="mt-3 font-medium">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/books"}>Books</Link>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Connect</h2>
          {/* Add your social/contact links here */}
        </section>
      </div>
      <small className="block text-center text-gray-600 mt-7">
        &copy;2025 Book Haven. All rights reserved.
      </small>
    </footer>
  );
}
