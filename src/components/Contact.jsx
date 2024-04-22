import Calendar from "./Calendar";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <section>
        <a className="info" href="mailto:info@tarekslater.com">
          info@tarekslater.com
        </a>
        <Link to="https://www.instagram.com/tarekslater/?hl=en" target="_blank">
          <p className="info">insta @tarekslater</p>
        </Link>

        <a className="info" href="tel:07768588042">
          phone (+44) 7768588042
        </a>
      </section>
      <section>
        <Calendar />
      </section>
    </div>
  );
};

export default Contact;
