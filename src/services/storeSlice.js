import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:'counterSlice',
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        reset:(state)=>{
            state.count=0
        },
        decrement:(state)=>{
            state.count-=1
        }
    }
})

export const {increment,reset,decrement}=counterSlice.actions
export default counterSlice.reducer