import { DataProvider } from "react-admin";
import { hhtpClient } from "@/lib/httpClient";
import jsonServerProvider from "ra-data-json-server";
import { urlBase } from "@/utils/urlBase";

export const dataProvider:DataProvider = jsonServerProvider(urlBase);