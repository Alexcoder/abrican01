import {configureStore } from "@reduxjs/toolkit";
import ApiSlice from "../reducers/ApiSlice"


const store = configureStore({
    reducer:{
        ApiSlice,
    }
});
export default store;