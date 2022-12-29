import { Pageable } from "./../types/types";
import { apiService, baseUrl } from "../services/ApiService";

describe("Check if getSearchUrlParams in apiService working properly", (): void => {
  it("check if base url is correct", (): void => {
    expect(baseUrl).toBe("http://localhost:4000");
  });

  it("check if empty pageable return string with default limit", (): void => {
    const pageable: Pageable = {};
    const result = apiService.getSearchUrlParams(pageable);
    expect(result).toBe("_limit=20");
  });

  it("check if pageable with pageNumber return string with default limit and this page nuFmber", (): void => {
    const pageable: Pageable = {
      pageNumber: 1,
    };
    const result = apiService.getSearchUrlParams(pageable);
    expect(result).toBe("_page=1&_limit=20");
  });

  it("check if pageable with pageNumber and sort return string with default limit page number and sort", (): void => {
    const pageable: Pageable = {
      pageNumber: 1,
      sort: {
        by: "id",
        order: "asc",
      },
    };
    const result = apiService.getSearchUrlParams(pageable);
    expect(result).toBe("_page=1&_limit=20&_sort=id&_order=asc");
  });

  it("check if pageable with pageNumber, sort and filter return string with default limit, page number, sort, filter", (): void => {
    const pageable: Pageable = {
      pageNumber: 1,
      sort: {
        by: "id",
        order: "asc",
      },
      filters: {
        name_like: "Tom",
      },
    };
    const result = apiService.getSearchUrlParams(pageable);
    expect(result).toBe("_page=1&_limit=20&_sort=id&_order=asc&name_like=Tom");
  });

  it("check if pageable with pageNumber, sort and filters return string with default limit, page number, sort, filters", (): void => {
    const pageable: Pageable = {
      pageNumber: 1,
      sort: {
        by: "id",
        order: "asc",
      },
      filters: {
        name_like: "Tom",
        surname_like: "Hanks",
      },
    };
    const result = apiService.getSearchUrlParams(pageable);
    expect(result).toBe(
      "_page=1&_limit=20&_sort=id&_order=asc&name_like=Tom&surname_like=Hanks"
    );
  });
});
