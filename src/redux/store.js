import {configureStore} from '@reduxjs/toolkit';
import todoReducer, { taskSlice } from '../features/task/taskSlice';

export const store=configureStore({
    reducer:{
        taskSlice: todoReducer
    }
})