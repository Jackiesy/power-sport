import axios from "axios";


const testUrl = "http://ceshi.szchaofenghui.com/api";
const productionUrl = process.env.REACT_APP_BUILD_URL;
let baseURL = process.env.NODE_ENV === "production" ? productionUrl : testUrl;
const agent = axios.create({
  baseURL,
  timeout: 10000
});

agent.interceptors.response.use(res => {
  if (res.data.code === 1) {
    return res;
  } else if (res.data.code === -1) {
    window.location.hash = "/login";
  } else {
    return Promise.reject(res);
  }
});

agent.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.hash = "/login";
  }

  let newConfig = {
    ...config,
    headers: {
      ...config.headers,
      Authorization:
          "Basic bHRlcl9vbmVtYXBfcGxhdDpsdGVyX29uZW1hcF9wbGF0X3NlY3JldA=="
    }
  };
  if (token) {
    newConfig["headers"]["token"] = token;
  }
  if (me) {
    newConfig["headers"]["userId"] = me.userId;
  }


  return newConfig;
});

export default agent;
