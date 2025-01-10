import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {APP_ENV} from "../env";
import { CategoryItem } from './types';

// Define the type for your list items


// Define the API slice
export const apiCategory = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: `${APP_ENV.REMOTE_BASE_URL}/api` }), // Replace with your base API URL
    endpoints: (builder) => ({
        // getList: builder.query<CategoryItem[], void>({
            getCategories: builder.query<CategoryItem[], void>({
            query: () => 'categories', // Replace with your endpoint
        }),
        createCategory: builder.mutation<CategoryItem, Omit<CategoryItem, 'id'>>({
            query: (newCategory) => ({
                url: 'categories/',
                method: 'POST',
                body: newCategory,
            }),
        }),
    }),
});

// Export the auto-generated hook
// export const { useGetListQuery } = apiCategory;
export const { useGetCategoriesQuery, useCreateCategoryMutation } = apiCategory;