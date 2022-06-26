import Cookies from "js-cookie";
export const isDev = process.env.NODE_ENV === "development";
export const routerBase = "/moderatorMgt/";
export const cookies = Cookies.withAttributes({
  path: "/",
  domain: ".qinglipai.cn",
});
export const API_TOKEN_KEY = "qinglipai_user_token";
