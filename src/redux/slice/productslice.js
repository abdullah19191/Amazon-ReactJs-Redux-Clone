import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


//ActionProducts
export const fetchProducts = createAsyncThunk('fetchProducts', async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.json();
}) 


const productSlice = createSlice({
    name:"products",
    initialState:{
        isLoading:false,
        data:null,
        isError:false
    },
    extraReducers:(builder) => {
        builder.addCase(fetchProducts.fulfilled, (state,action) =>{
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchProducts.pending, (state,action) =>{
            state.isLoading = true;
            state.data = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state,action) =>{
            console.log("Error",action.payload)
            state.isError = true;
        });
    }
});

export default productSlice.reducer;