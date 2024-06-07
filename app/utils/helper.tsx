import { urlBase } from "@/utils/urlBase";
const fetchData = async (pageNumber: number) => {
  const res = await fetch(`${urlBase}/brands?pageNumber=${pageNumber}`);
  if (!res.ok) {
    throw new Error("error while retrieving data");
  }
  return res.json();
};

export { fetchData };
