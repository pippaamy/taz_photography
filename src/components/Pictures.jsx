import { useEffect, useState } from "react";
import { getDogs } from "../api";
import Loading from "./Loading";

const Pictures = () => {
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
  console.log(dogs);
  return (
    <div>
      <ul className="gallery">
        {dogs.map((dog, index) => {
          return (
            <li className="grid-item" key={index}>
              <img className="grid-dog" src={dog} alt="pic of dog" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pictures;
