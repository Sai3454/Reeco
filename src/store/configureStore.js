import { configureStore } from "@reduxjs/toolkit";
import productsCart from './productsCart'

const store = configureStore({
    reducer: {
        products: productsCart,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),     
    ],
});

export default store;
