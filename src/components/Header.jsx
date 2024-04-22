import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Link className="navlink" to="/">
          <h1 className="title">
            T A R E K <br /> S L A T E R
          </h1>
        </Link>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
