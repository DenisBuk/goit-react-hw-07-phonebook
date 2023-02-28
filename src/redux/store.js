import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { FilterSlice } from './FilterSlice';
import { ContactApi } from './ContactsApi';


export const store = configureStore({
    reducer: {
        filter: FilterSlice.reducer,
        [ContactApi.reducerPath]: ContactApi.reducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware(),
        ContactApi.middleware,
    ],
});

setupListeners(store.dispatch);