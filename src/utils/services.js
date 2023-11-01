import axios from "axios";

const BaseUrl = "https://localhost:7163/";
export const postService = (url, body ) => {
  return axios.post(
    `${BaseUrl}/api${url}`, 
    body, 
    {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
