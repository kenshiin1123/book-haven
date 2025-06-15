import { useEffect } from "react";

export default function Homepage() {
  useEffect(() => {
    document.title = "Book Haven";
  });

  return (
    <>
      <main className="space-y-10 p-10 min-sm:w-[37rem] md:w-[35rem] lg:w-[45rem] mx-auto">
        <h1 className="text-3xl font-bold border text-center p-3 text-red-700">
          This site is under construction.
        </h1>
        <HeroHeader />
        <AboutThisSite />
        <PurposeOfThisWebsite />
        <BuildWith />
        <AboutDeveloper />
      </main>
    </>
  );
}

const HeroHeader = () => {
  return (
    <section id="grow-with-every-page">
      <H2>Grow With Every Page.</H2>
      <P>
        Explore books that fuel self-mastery, sharpen your mindset, and keep you
        moving forward.
      </P>
    </section>
  );
};

const AboutThisSite = () => {
  return (
    <section id="about-this-site">
      <H2>About this site</H2>
      <P>
        Welcome to <b>Book Haven</b> – your cozy digital corner for discovering
        and exploring books that inspire, inform, and ignite the imagination.
        This project isn’t just a bookstore — it’s a demonstration of full-stack
        web development in action. Designed and developed as a portfolio piece,
        <b> Book Haven</b> showcases my technical skills and passion for clean,
        user-friendly digital experiences.
      </P>
    </section>
  );
};

const PurposeOfThisWebsite = () => {
  return (
    <section id="purpose-of-this-website">
      <H2>Purpose of This Website</H2>
      <ol className="list-decimal ml-10 space-y-5">
        <li>
          <H3>Highlight My Skills</H3>
          <P>This site is a hands-on demonstration of my abilities in:</P>
          <ul className="list-disc ml-10">
            <li>Frontend development (React, Tailwind CSS)</li>
            <li>Backend development (Node.js, Express, MongoDB)</li>
            <li>RESTful API design and integration</li>
            <li>Authentication, validation, and file upload handling</li>
            <li>Responsive UI/UX design</li>
            <li>
              E-commerce concepts like shopping carts, product filtering, and
              checkout flows
            </li>
          </ul>
        </li>
        <li>
          <H3>Simulate a Real-World E-commerce Experience</H3>
          <P>
            The goal is to build an interactive, full-featured platform centered
            around a single niche: books. From classics to modern bestsellers,
            the product catalog reflects what a working bookstore might look
            like online.
          </P>
        </li>
      </ol>
    </section>
  );
};

const BuildWith = () => {
  return (
    <section>
      <H2>Built With</H2>
      <ul className="ml-10 list-disc">
        <li>
          <b>Frontend:</b> React + Tailwind CSS
        </li>
        <li>
          <b>Backend:</b> Node.js + Express
        </li>
        <li>
          <b>Database:</b> MongoDB
        </li>
        <li>
          <b>Other Features:</b> Book search, category filters, cart management,
          and mock checkout flow
        </li>
      </ul>
    </section>
  );
};

const AboutDeveloper = () => {
  return (
    <section>
      <H2>About the Developer</H2>
      <div className="space-y-3">
        <P>
          Hi! I’m Lance, a passionate and motivated self learner student with a
          love for web development and continuous learning. This website is one
          of many stepping stones on my journey to becoming a professional
          full-stack developer.
        </P>
        <P>
          Whether you're browsing the site or reviewing the codebase, I hope
          this project gives you a clear glimpse into what I can build.
        </P>
      </div>
    </section>
  );
};

const H2 = ({ children }) => {
  return <h2 className="text-xl font-semibold mb-3">{children}</h2>;
};

const H3 = ({ children }) => {
  return <h3 className="text-md font-semibold">{children}</h3>;
};

const P = ({ children }) => {
  return <p className="text-justify">{children}</p>;
};
