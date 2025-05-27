import axios from "axios";

export const API_BASE_URL = "http://192.168.0.109:3000";

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Set a timeout of 10 seconds
});
