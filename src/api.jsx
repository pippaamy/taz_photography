import axios from "axios";

export const getDogs = () => {
  return axios
    .get("https://dog.ceo/api/breeds/image/random/12")
    .then(({ data }) => {
      return data;
    });
};
