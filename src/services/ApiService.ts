import _ from "lodash";
import { Pageable } from "../types/types";

export type ApiService = {
  getRequest(input: RequestInfo | URL, params?: Pageable): Promise<Response>;
  getSearchUrlParams(pageable: Pageable): string;
};

export const baseUrl = "http://localhost:4000";

export const apiService: ApiService = {
  async getRequest(
    input: RequestInfo | URL,
    params?: Pageable
  ): Promise<Response> {
    let url = baseUrl + input;
    if (!_.isNil(params)) {
      url += `?${apiService.getSearchUrlParams(params)}`;
    }
    const res = await fetch(url);
    return res;
  },

  getSearchUrlParams(pageable: Pageable): string {
    let page: string = "";
    let limit: string = "_limit=20";
    if (pageable.pageNumber) {
      page = `_page=${pageable.pageNumber}`;
    }
    const filters: string[] = [];
    if (pageable.filters) {
      for (const filterName in pageable.filters) {
        if (pageable.filters.hasOwnProperty(filterName)) {
          filters.push(`${filterName}=${pageable.filters[filterName]}`);
        }
      }
    }
    return _.join(_.compact([page, limit, ...filters]), "&");
  },
};
