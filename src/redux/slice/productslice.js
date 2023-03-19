import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

//ActionProducts
const fetchProducts = createAsyncThunk('fetchProducts', async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.json();

}) 

const productSlice = createSlice({
    name:"products"
});

export default productSlice.reducer;