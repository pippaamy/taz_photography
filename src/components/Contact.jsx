import Calendar from "./Calendar";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <section className="infoSection">
        <a className="info" href="mailto:info@tarekslater.com">
          email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; info@tarekslater.com
        </a>
        <Link
          className="info"
          to="https://www.instagram.com/tarekslater/?hl=en"
          target="_blank"
        >
          insta &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; @tarekslater
        </Link>

        <a className="info" href="tel:07768588042">
          phone &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (+44) 7768588042
        </a>
      </section>
      <br />
      <section>
        <Calendar />
      </section>
    </div>
  );
};

export default Contact;
