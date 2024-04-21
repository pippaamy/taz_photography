import axios from "axios";

export const getDogs = () => {
  return axios
    .get("https://dog.ceo/api/breeds/image/random/9")
    .then(({ data }) => {
      return data;
    });
};
