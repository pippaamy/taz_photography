import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <section>
      <nav className="navigation">
        <Link className="navlink" to="/">
          <p> PORTFOLIO </p>
        </Link>
        <Link className="navlink" to="/about">
          <p> ABOUT </p>
        </Link>
        <Link className="navLink" to="/contact">
          <p className="grey"> CONTACT </p>
        </Link>
        <Link
          className="navLink"
          to="https://www.instagram.com/tarekslater/?hl=en"
          target="_blank"
        >
          <p> INSTAGRAM </p>
        </Link>
      </nav>
    </section>
  );
};

export default Navigation;
