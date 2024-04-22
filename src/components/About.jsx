const About = () => {
  return (
    <section className="aboutMe">
      <p className="tarekDescription">
        My name is Tarek, my photography has a focus on simplicity and serenity.
        My relaxed, contemplative approach, influenced by the use of medium
        format film helps you find ease in front of the camera. Each session is
        collaborative and creative, each sitter is treated like the unique
        person that they are and each exposure is crafted and sculptured to
        capture you at your very best.
        <br />
        <br />
        The studio is based in Ancoats. A stone's throw away from Manchester
        Piccadilly. All are welcome - get in touch{" "}
        <a className="contactLink" href="/contact">
          here
        </a>{" "}
        to book actor headshot sessions or to discuss other creative projects.
      </p>
      <img
        className="dog"
        src="https://images.dog.ceo/breeds/setter-english/n02100735_7013.jpg"
        alt="pic of dog"
      />
    </section>
  );
};

export default About;
