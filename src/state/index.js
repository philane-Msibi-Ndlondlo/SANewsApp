import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import articleReducer from './articleSlice';

export const Store = configureStore({
    
    reducer: {
        articles: articleReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
    /*middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: { warnAfter: 128 },
        serializableCheck: { warnAfter: 128 },
  })*/
});

