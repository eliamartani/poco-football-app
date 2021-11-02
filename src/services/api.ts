import axios from "axios";

export const API_ENDPOINT = import.meta.env.VITE_API;

export const fetch = (path: string): Promise<unknown> => {
  return axios
    .get(`${API_ENDPOINT}${path}`)
    .then(({ data }) => data)
    .catch((error) => {
      console.error("💣", error);

      return null;
    });
};
