import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Data} from "../../interface";




export const valutesApi = createApi({
    reducerPath: 'valutesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.cbr-xml-daily.ru'}),
    endpoints:(builder) => ({
        getAllData: builder.query<Data, string>({
            query: () => `/daily_json.js`,
        }),
    }),
})

export const {useGetAllDataQuery} = valutesApi