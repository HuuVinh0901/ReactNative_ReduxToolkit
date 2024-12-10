import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from './toDoSlice'
import authReducer from './authSlice'
const store=configureStore({
    reducer:{
        todo:toDoReducer,
        auth:authReducer
    }
})
export default store;