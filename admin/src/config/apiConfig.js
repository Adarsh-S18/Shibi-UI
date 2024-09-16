import axios from "axios";

const API = axios.create({
  baseURL: "http://167.71.235.26:5000/api/",
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
