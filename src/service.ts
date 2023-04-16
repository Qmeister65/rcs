import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CardAPIProps } from '@/types';

export const service = createApi({
  reducerPath: 'serviceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://the-one-api.dev/v2',
    prepareHeaders: (headers) => {
      headers.set('Authorization', 'Bearer wVHj2Pv5am7yP3fvyAvm');
      return headers;
    },
  }),
  endpoints: (build) => ({
    fetchCards: build.query<CardAPIProps[], string>({
      query: (value) => ({
        url: `/character?name=/${value}/i`,
      }),
      transformResponse: (response: { docs: CardAPIProps[] }) => response.docs,
    }),
  }),
});

export const { useFetchCardsQuery } = service;
