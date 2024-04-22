import Carousel from "react-material-ui-carousel";
import { useEffect, useState } from "react";
import { getDogs } from "../api";
import Loading from "./Loading";

const CarouselPic = () => {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDogs()
      .then((dogs) => {
        setDogs(dogs.message);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (isLoading) return <Loading />;
  return (
    <div className="carousel">
      <Carousel>
        {dogs.map((dog, index) => {
          return <img className="carouselDog" src={dog} alt="pic of dog" />;
        })}
      </Carousel>
    </div>
  );
};

export default CarouselPic;
