import axios from "axios";

export const API_BASE_URL = "https://ewpxcpashqgo3plw6qq7ziezei0wsuon.lambda-url.us-east-1.on.aws";

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Set a timeout of 10 seconds
});
