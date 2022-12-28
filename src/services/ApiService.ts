import _ from "lodash";
import { Pageable } from "../types/types";

export type ApiService = {
  getRequest(url: string, params?: Pageable): Promise<Response>;
  postRequest<T>(url: string, body: T): Promise<Response>;
  deleteRequest(url: string): Promise<Response>;
  getSearchUrlParams(pageable: Pageable): string;
};

export const baseUrl = "http://localhost:4000";

export const apiService: ApiService = {
  async getRequest(url: string, params?: Pageable): Promise<Response> {
    let updatedUrl = baseUrl + url;
    if (!_.isNil(params)) {
      updatedUrl += `?${apiService.getSearchUrlParams(params)}`;
    }
    return await fetch(updatedUrl);
  },

  async postRequest<T>(url: string, body: T): Promise<Response> {
    const finalUrl = baseUrl + url;
    const response = await fetch(finalUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response;
  },

  async deleteRequest(url: string): Promise<Response> {
    const finalUrl = baseUrl + url;
    const response = await fetch(finalUrl, {
      method: "DELETE",
    });
    return response;
  },

  getSearchUrlParams(pageable: Pageable): string {
    let page: string = "";
    let limit: string = "_limit=20";
    let sort: string = "";
    if (pageable.pageNumber) {
      page = `_page=${pageable.pageNumber}`;
    }
    if (pageable.sort) {
      sort = `_sort=${pageable.sort.by}&_order=${pageable.sort.order}`;
    }
    const filters: string[] = [];
    if (pageable.filters) {
      for (const filterName in pageable.filters) {
        if (pageable.filters.hasOwnProperty(filterName)) {
          filters.push(`${filterName}=${pageable.filters[filterName]}`);
        }
      }
    }
    return _.join(_.compact([page, limit, sort, ...filters]), "&");
  },
};
