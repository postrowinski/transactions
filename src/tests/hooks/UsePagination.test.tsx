import { renderHook } from "@testing-library/react";
import { usePagination } from "../../hooks/usePagination";

describe("check UsePagination hooks", (): void => {
  it("check if usePagination return list on first page return list of available pages", (): void => {
    const { result } = renderHook(() =>
      usePagination({
        currentPage: 1,
        siblingCount: 1,
        pageSize: 10,
        totalCount: 50,
      })
    );
    expect(result.current).toEqual([1, 2, 3, 4, 5]);
  });

  it("check if usePagination return list on first page return list of available pages with dots", (): void => {
    const { result } = renderHook(() =>
      usePagination({
        currentPage: 1,
        siblingCount: 1,
        pageSize: 10,
        totalCount: 100,
      })
    );
    expect(result.current).toEqual([1, 2, 3, 4, 5, "...", 10]);
  });

  it("check if usePagination return list on 4 page return list of available pages with dots", (): void => {
    const { result } = renderHook(() =>
      usePagination({
        currentPage: 4,
        siblingCount: 1,
        pageSize: 10,
        totalCount: 100,
      })
    );
    expect(result.current).toEqual([1, "...", 3, 4, 5, "...", 10]);
  });

  it("check if usePagination return list on 10 page and 2 siblingCount return list of available pages with dots", (): void => {
    const { result } = renderHook(() =>
      usePagination({
        currentPage: 10,
        siblingCount: 2,
        pageSize: 5,
        totalCount: 100,
      })
    );
    expect(result.current).toEqual([1, "...", 8, 9, 10, 11, 12, "...", 20]);
  });
});
