import { configureStore} from '@reduxjs/toolkit';
import productReducer from './slice/productslice';

export const store = configureStore({
    reducer: {
      product:productReducer,
    }
})
