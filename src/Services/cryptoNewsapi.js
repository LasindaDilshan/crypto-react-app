import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const cryptoNewsapiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '44eedf7c31msh112f2cfe6c68963p12bad6jsn5909bf9ea126',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
		
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
const createRequest = (url) => ({url, headers: cryptoNewsapiHeaders  })

export const cryptoNewsApi = createApi({
    ReducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery( { baseUrl } ),
    endpoints: (builder) => ({
        getCryptosNews: builder.query({
            query: ({newsCategory,count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetcryptoNewsQuery, } = cryptoNewsApi;