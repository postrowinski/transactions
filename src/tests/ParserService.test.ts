import { parserService } from "../services/ParserService";

describe("Check if getSearchUrlParams in parserService working properly", (): void => {
  it("check if linkHeader as null return empty object", (): void => {
    const linkHeader = null;
    const result = parserService.linkHeader(linkHeader);
    expect(result).toEqual({});
  });

  it("check if linkHeader as string with [first, last, next] rel, return object with keys [first, last, next], and thats key will be have limit and page field", (): void => {
    const linkHeader =
      '<http://localhost:4000/transactions?_page=1&_limit=20>; rel="first", <http://localhost:4000/transactions?_page=2&_limit=20>; rel="next", <http://localhost:4000/transactions?_page=3&_limit=20>; rel="last"';
    const result = parserService.linkHeader(linkHeader);
    expect(result).toEqual({
      first: {
        limit: "20",
        page: "1",
      },
      last: {
        limit: "20",
        page: "3",
      },
      next: {
        limit: "20",
        page: "2",
      },
    });
  });

  it("check if linkHeader as string with [first, last, next, prev] rel, return object with keys [first, last, next, prev], and thats key will be have limit and page field", (): void => {
    const linkHeader =
      '<http://localhost:4000/transactions?_page=1&_limit=5>; rel="first", <http://localhost:4000/transactions?_page=2&_limit=5>; rel="prev", <http://localhost:4000/transactions?_page=4&_limit=5>; rel="next", <http://localhost:4000/transactions?_page=10&_limit=5>; rel="last"';
    const result = parserService.linkHeader(linkHeader);
    expect(result).toEqual({
      first: {
        limit: "5",
        page: "1",
      },
      last: {
        limit: "5",
        page: "10",
      },
      next: {
        limit: "5",
        page: "4",
      },
      prev: {
        limit: "5",
        page: "2",
      },
    });
  });
});
