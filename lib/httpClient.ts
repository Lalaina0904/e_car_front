import { fetchUtils } from "react-admin";
import Cookies from "js-cookie";
export const hhtpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({
      Accept: "application/json",
    });
  }
  if (localStorage.getItem("token")) {
    const token = Cookies.get("token");
    options.headers.set("Authorization", `Bearer ${token}`);
  }
  return fetchUtils.fetchJson(url, options);
};
