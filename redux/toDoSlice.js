import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL='https://67571cc4c0a427baf94bc4c7.mockapi.io/ToDo'

export const fetchData=createAsyncThunk('todo/fetchData',async()=>{
    const response=await axios.get(API_URL)
    return response.data;
});
export const addToDo=createAsyncThunk('todo/addToDo',async(newToDo)=>{
    const response = await axios.post(API_URL,newToDo)
    return response.data
})
export const deleteTodo=createAsyncThunk('todo/deleteTodo',async(id)=>{
    await axios.delete(`${API_URL}/${id}`)
    return id
})
export const updateTodo = createAsyncThunk('todo/updateTodo', async ({ id, updatedTodo }) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedTodo);
    return response.data; // Trả về todo đã được cập nhật
});
const todoSlice=createSlice({
    name:'todo',
    initialState:{
        todo:[],
        loading:false,
        error:null

    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.todo=action.payload
            state.loading=false
        })
        .addCase(fetchData.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
        .addCase(deleteTodo.fulfilled,(state,action)=>{
            console.log('Deleted ID:', action.payload);
            state.todo=state.todo.filter((s)=>s.id!==action.payload)
        })
        .addCase(addToDo.fulfilled,(state,action)=>{
            state.todo.push(action.payload)
        })
        .addCase(updateTodo.fulfilled, (state, action) => {
            console.log("Updated Todo:", action.payload);
            const index = state.todo.findIndex((todo) => todo.id === action.payload.id);
            if (index !== -1) {
                state.todo[index] = action.payload;
            }
        });
    }
})
export default todoSlice.reducer;