export type LinkHeaderResult = Record<
  string,
  { url: string; page: string; limit: string }
>;

export type ParserService = {
  linkHeader: (linkHeader: string | null) => LinkHeaderResult;
};

export const parserService: ParserService = {
  linkHeader: (linkHeader: string | null): LinkHeaderResult => {
    if (!linkHeader) {
      return {};
    }
    const linkHeadersArray = linkHeader
      .split(", ")
      .map((header: string) => header.split("; "));
    const linkHeadersMap = linkHeadersArray.map((header: string[]) => {
      const thisHeaderRel = header[1].replace(/"/g, "").replace("rel=", "");
      const thisHeaderUrl = header[0].slice(1, -1);
      const searchParams = new URL(thisHeaderUrl).searchParams;
      const page = searchParams.get("_page");
      const limit = searchParams.get("_limit");
      return [thisHeaderRel, { url: thisHeaderUrl, page, limit }];
    });
    return Object.fromEntries(linkHeadersMap);
  },
};
