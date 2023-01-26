import { configureStore , combineReducers} from "@reduxjs/toolkit";

import { cryptoApi } from "../Services/CryptoApi.js";
import { cryptoNewsApi } from "../Services/cryptoNewsapi.js";


const reducers = {
    cryptoApi: cryptoApi.reducer,
    cryptoNewsApi: cryptoNewsApi.reducer,
  }
export default configureStore({
    reducer: {
        [reducers.reducerPath]: reducers.reducer,
        
    },
    
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(cryptoApi.middleware),

    
})