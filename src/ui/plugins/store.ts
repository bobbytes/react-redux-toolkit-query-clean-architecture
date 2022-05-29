import { configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const {reducerPath, reducer, injectEndpoints} = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3030/api'
  }),
  endpoints: () => ({}),
})

export {
  injectEndpoints,
};

export default configureStore({
  reducer: {
    [reducerPath]: reducer,
  },
})
