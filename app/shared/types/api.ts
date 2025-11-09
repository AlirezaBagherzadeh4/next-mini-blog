export interface IApiResponse<T> {
  data: T;
  count?: number;
  message?: string;
  status?: number;
}

export interface IPagination {
  page: number;
  limit: number;
  total: number;
}
