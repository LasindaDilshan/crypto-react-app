import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'be3f5d24c8msh449ca694b0861fbp1f751ejsnf08d6683f6bb',

    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
		
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url) => ({url, headers: cryptoApiHeaders  })

export const cryptoApi = createApi({
    ReducerPath: "cryptoApi",
    
    baseQuery: fetchBaseQuery( { baseUrl } ),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
})

export const { useGetCryptosQuery, } = cryptoApi;