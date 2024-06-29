// slices/articlesSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IArticle } from '../../types/articlesInterface';

// Get your own API key here: https://developer.nytimes.com
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.nytimes.com/svc/mostpopular/v2/';

interface FetchArticlesArgs {
  period: number;
  section: string;
  search: string;
}
interface FetchAllSectionsArgs {
  period: number;
}

interface FetchSingleArticleArgs {
  id: number;
  period: number;
}

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder) => ({
    fetchArticles: builder.query<IArticle[], FetchArticlesArgs>({
      query: ({ period = 1 }) => `viewed/${period}.json?api-key=${API_KEY}`,
      /**
       * Transforms the response from the API by filtering the articles based on the provided arguments.
       *
       * @param {Object} response - The response object containing an array of articles.
       * @param {Object} meta - Additional metadata about the response.
       * @param {FetchArticlesArgs} arg - The arguments for filtering the articles.
       * @param {number} arg.period - The period for which to fetch the articles.
       * @param {string} arg.section - The section to filter the articles by.
       * @param {string} arg.search - The search term to filter the articles by.
       * @return {IArticle[]} The filtered array of articles.
       */
      transformResponse: (
        response: { results: IArticle[] },
        meta,
        arg: FetchArticlesArgs,
      ) => {
        let articles = response.results;
        if (arg.section) {
          articles = articles.filter((article) => {
            return article.section === arg.section;
          });
        }
        if (arg.search) {
          articles = articles.filter((article) =>
            article.title.toLowerCase().includes(arg.search.toLowerCase()),
          );
        }
        return articles;
      },
    }),
    fetchAllSections: builder.query<string[], FetchAllSectionsArgs>({
      query: ({ period = 1 }) => `viewed/${period}.json?api-key=${API_KEY}`,
      /**
       * Transforms the response from the API by extracting unique sections from the articles.
       *
       * @param {Object} response - The response object containing an array of articles.
       * @param {IArticle[]} response.results - The array of articles.
       * @return {string[]} An array of unique sections.
       */
      transformResponse: (response: { results: IArticle[] }) => {
        const articles = response.results;
        const uniqueSections = Array.from(
          new Set(articles.map((article) => article.section)),
        );
        return uniqueSections;
      },
    }),
    fetchSingleArticle: builder.query<IArticle, FetchSingleArticleArgs>({
      query: ({ period = 1 }) => `viewed/${period}.json?api-key=${API_KEY}`,
      /**
       * Transforms the response from the API by finding the article with the provided id.
       *
       * @param {Object} response - The response object containing an array of articles.
       * @param {IArticle[]} response.results - The array of articles.
       * @param {Object} meta - Additional metadata about the response.
       * @param {Object} arg - The arguments for finding the article.
       * @param {number} arg.id - The id of the article to find.
       * @throws {Error} Throws an error if the article with the provided id is not found.
       * @return {IArticle} The article with the provided id.
       */
      transformResponse: (response: { results: IArticle[] }, meta, arg) => {
        const articles = response.results;
        const article = articles.find((article) => article.id === arg.id);
        if (!article) {
          throw new Error(`Article with id ${arg.id} not found`);
        }
        return article;
      },
    }),
  }),
});

export const {
  useFetchArticlesQuery,
  useFetchSingleArticleQuery,
  useFetchAllSectionsQuery,
} = articlesApi;
