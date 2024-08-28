import axios from "axios";

// You can set a base URL for your API if you have one
const API = axios.create({
  baseURL: "https://api.example.com", // Replace with your API URL
});

// Example GET request
export const fetchData = () => {
  return API.get("/data-endpoint");
};

// Example POST request
export const postData = (data) => {
  return API.post("/data-endpoint", data);
};
