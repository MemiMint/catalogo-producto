import axios, { AxiosRequestConfig, AxiosPromise } from "axios";
import { getApiPath, SERVER_CONNECTION } from "./server";

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
type ContentType = "application/json" | "multipart/form-data";

const BASE_URL: string = getApiPath(SERVER_CONNECTION);

export const getAxios = <TParams, TBody>(
  endpoint: string,
  method: HTTPMethod,
  contentType: ContentType = "application/json",
  params: TParams | undefined = undefined,
  body: TBody | undefined = undefined
): Promise<AxiosPromise> => {
  const OPTIONS: AxiosRequestConfig = {
    method: method,
    baseURL: BASE_URL,
    params: {
      ...params,
    },
    headers: {
      "Content-Type": contentType,
    },
    url: endpoint,
    data: body,
    timeout: 1000 * 40,
  };

  console.info(`[HTTP] ${method} Request Sent at ${BASE_URL + endpoint}`);

  if (params) {
    console.info("With the following params: ");
    console.log(params);
  }

  if (body) {
    console.info("With the following body: ");
    console.log(body);
  }

  return axios(OPTIONS);
};
