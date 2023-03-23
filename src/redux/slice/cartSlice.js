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
            const item = state.products.find((item)=>item.id === action.payload.id)
            if(item){
                item.quantity += action.payload.quantity;
            }else{
                state.products.push(action.payload)
            }
        },
        deleteCart:(state,action)=>{
            state.products = state.products.filter((item)=>item.id!==action.id);
        },
        resetCart:(state,action)=>{
            state.products=[]
        }

    }
})

export const {addToCart,deleteCart,resetCart} = cartSlice.actions;

export default cartSlice.reducer;