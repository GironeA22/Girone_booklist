import {configureStore} from '@reduxjs/toolkit';
import booklistReducer from '../booklistSlice';

export const store = configureStore({
    reducer:{
        booklist: booklistReducer
    }
})