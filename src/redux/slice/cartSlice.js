import { createSlice } from '@reduxjs/toolkit';

const initialState={
    products:[],
    userinfo:[]
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.products = action.payload
        }
    }
})

export const {addToCart} = cartSlice.actions;

export default cartSlice.reducer;