import { configureStore} from "@reduxjs/toolkit";
import dataReducer from '../storage/dataSlice';

export const store = configureStore({
    reducer: {
        data: dataReducer
    }
});