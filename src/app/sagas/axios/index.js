import axios from "axios";
import qs from "qs";

export async function apiRequest({ method, url, baseURL, params = {}, data }) {
  let config = {
    method: method || "get",
    baseURL: baseURL || "https://vsem-edu-oblako.ru/singlemerchant/api/",
    url: url,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    params: {
      json: true,
      merchant_keys: "929990d3b27944af404a5eb3ee1ec4f6",
      lang: "ru",
      device_platform: "site",
      device_id: "010101",
      ...params,
    },
  };

  if (data) {
    config.data = qs.stringify(data);
  }

  return await new Promise((res, rej) => {
    axios(config)
      .then((resp) => res(resp.data))
      .catch((err) => rej(err));
  });
}
