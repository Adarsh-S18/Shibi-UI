import axios from "axios";
import { baseURL } from "./common";

const API = axios.create({
  baseURL: `${baseURL}/api/`,
});

// Example GET request
export const fetchData = () => {
  console.log("sajkdknjakjdsjknasdjnjksndjk.................");
  return API.get("/data-endpoint");
};

// Example POST request
export const postData = (data) => {
  return API.post("/data-endpoint", data);
};
