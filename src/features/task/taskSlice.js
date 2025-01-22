import { createSlice } from "@reduxjs/toolkit";

const initialState={
    tasks:[]
}

export const taskSlice=createSlice({
    name:'todoList',
    initialState,
    reducers:{
        addTask:(state,action)=>{
            state.tasks=[action.payload,...state.tasks]
        },
        removeTask:(state,action)=>{
            state.tasks = state.tasks.filter((_, index) => index !== action.payload); 
        }
    }
})

export const {addTask,removeTask}=taskSlice.actions;

export default taskSlice.reducer;