import { configureStore } from '@reduxjs/toolkit';
import promise from 'redux-promise-middleware';

import reducer from '../reducer/index';

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    }).concat(promise)
});

export default store;