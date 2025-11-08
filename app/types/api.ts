export interface IApiResponse<T> {
  data: T;
  message?: string;
  status?: number;
}

export interface IPagination {
  page: number;
  limit: number;
  total: number;
}
