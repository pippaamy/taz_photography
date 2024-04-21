import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link className="navlink" to="/">
      <header>
        <h1 className="title">
          T A R E K <br /> S L A T E R
        </h1>
      </header>
    </Link>
  );
};

export default Header;
