import _ from "lodash";
import { useEffect, useContext, useCallback } from "react";
import { AppContext } from "../context/AppContext";
import { apiService } from "../services/ApiService";
import { parserService } from "../services/ParserService";
import { Pageable, Transaction } from "../types/types";

export const useGetTransactions = () => {
  const { setTransactions, setTransactionsPaging, transactionsParams } =
    useContext(AppContext);

  const setTransactionPaging = useCallback(
    (links: string | null, current?: number) => {
      if (links) {
        const headersObject = parserService.linkHeader(links);
        if ("last" in headersObject) {
          const lastPage = headersObject["last"];
          setTransactionsPaging({
            current: current ? current : 0,
            pageSize: +lastPage.limit,
            total: +lastPage.page * +lastPage.limit,
          });
        }
      } else {
        setTransactionsPaging({
          current: 1,
          pageSize: 0,
          total: 0,
        });
      }
    },
    [setTransactionsPaging]
  );

  const getTransactions = useCallback(
    (params: Pageable) => {
      if (_.isEmpty(params)) {
        params.pageNumber = 1;
        params.sort = {
          by: "date",
          order: "desc",
        };
      }
      apiService.getRequest("/transactions", params).then((res: Response) => {
        setTransactionPaging(res.headers.get("Link"), params.pageNumber);
        res.json().then((trans: Transaction[]) => setTransactions(trans));
      });
    },
    [setTransactions, setTransactionPaging]
  );

  useEffect(() => {
    getTransactions(transactionsParams);
  }, [transactionsParams, getTransactions]);
};
