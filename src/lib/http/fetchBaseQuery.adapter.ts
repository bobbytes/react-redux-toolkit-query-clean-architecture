import { FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { FetchArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers';
import { HttpAdapter, HttpRequestConfig, HttpResponse } from './http'

type FetchWithBaseQuery = (arg: string | FetchArgs) => MaybePromise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>>;

class FetchBaseQueryAdapter extends HttpAdapter {
  constructor(
    protected fetchWithBaseQuery: FetchWithBaseQuery,
    public defaults?: HttpRequestConfig,
  ) {
    super(defaults);
  }

  async request<JsonBody = unknown>(
    config: HttpRequestConfig,
  ): Promise<HttpResponse<JsonBody>> {
    const response = await this.fetchWithBaseQuery({
      url: config.url ?? '',
      method: config.method,
      body: config.body,
    })

    return {
      ok: response.meta?.response?.ok ?? false,
      status: response.meta?.response?.status ?? 500,
      statusText: response.meta?.response?.statusText ?? '',
      headers: response.meta?.response?.headers ?? {} as Headers,
      json: () => Promise.resolve(response.data) as Promise<JsonBody>,
      text: () => response.meta!.response?.text() ?? Promise.resolve(''),
      blob: () => response.meta!.response?.blob() ?? Promise.resolve(new Blob()),
    }
  }
}

export default FetchBaseQueryAdapter;

