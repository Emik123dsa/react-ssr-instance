import axios from "axios";

const MONGO = {
  apiKey: "http://127.0.0.1:3001",
};

export async function apiRequest({ method, url, params = {} }) {
  let config = {
    method: method || "get",
    baseURL: MONGO.apiKey,
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      ...params,
    },
  };

  const res = await axios(config);

  return res.data;
}