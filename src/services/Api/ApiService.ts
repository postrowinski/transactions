export interface ApiService {
  getRequest(input: RequestInfo | URL, init?: RequestInit): Promise<any>;
}

export const baseUrl = "http://localhost:4000";

export const apiService: ApiService = {
  async getRequest(input: RequestInfo | URL, init?: RequestInit): Promise<any> {
    const res = await fetch(baseUrl + input);
    return res;
  },
};
