import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './src/Slices/CounterSlice';
const store= configureStore({
    reducer:{
        counter : counterSlice 
    }
})

export default store