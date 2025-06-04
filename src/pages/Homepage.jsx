export default function Homepage() {
  return (
    <>
      <main className="space-y-10 p-10 min-sm:w-[37rem] md:w-[50rem] mx-auto">
        <h1 className="text-3xl font-bold">Homepage</h1>
        <HeroHeader />
        <AboutThisSite />
        <PurposeOfThisWebsite />
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
      <ol className="list-decimal ml-10 space-y-5 mt-5">
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

const H2 = ({ children }) => {
  return <h2 className="text-xl font-semibold">{children}</h2>;
};

const H3 = ({ children }) => {
  return <h3 className="text-md font-semibold">{children}</h3>;
};

const P = ({ children }) => {
  return <p className="text-justify">{children}</p>;
};
