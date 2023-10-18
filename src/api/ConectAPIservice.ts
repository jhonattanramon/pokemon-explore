import axios from "axios";

const API = axios.create({
  baseURL: `http://192.168.0.4:3000`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default API;
