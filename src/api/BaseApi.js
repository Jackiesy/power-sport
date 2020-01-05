import agent from "./agent";
import { AxiosRequestConfig } from "axios";
import Msg from "components/Message";

class BaseApi {
  constructor() {}

  async request(method, config, extra = AxiosRequestConfig) {
    const requestConfig = {
      method,
      url: config.url,
      params: config.params || {},
      data: config.data,
      ...extra
    };
    try {
      const result = await agent.request(requestConfig);
      return result && result.data;
    } catch (error) {
      Msg({
        type: "error",
        content:
            error.data || error.response
                ? (error.data && error.data.msg) ||
                (error.response && error.response.data.msg)
                : "错误"
      });
      return Promise.reject(error);
    }
  }

  async get(url, { params } = {}, extra) {
    return this.request("GET", { url, params: { ...params } }, extra);
  }

  async post(url, params, extra) {
    return this.request("POST", { url, data: params }, extra);
  }

  async patch(url, params, extra) {
    return this.request("PATCH", { url, data: params }, extra);
  }

  async delete(url, params, extra) {
    return this.request("DELETE", { url, data: params }, extra);
  }
}

export default BaseApi;
