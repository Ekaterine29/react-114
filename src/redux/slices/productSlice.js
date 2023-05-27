import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";

 export const saveProduct= createAsyncThunk(
    'product/saveProduct',
    async({product},{rejectWithValue,dispatch}) => {
        try {
            const {data} = await axiosInstance.post('/products',{product});
            dispatch(fetchHomePageProducts);
            return data;
        } catch (error) {
            return rejectWithValue('could not save product');

        }
    }
 ) ;

 export const fetchHomePageProducts=createAsyncThunk(
    'product/fetchHomePageProducts',
    async(_,{rejectWithValue})=> {
    try {
        const {data}=await axiosInstance.get('/products');
        return data;
    } catch (error) {
        return rejectWithValue('could not fetch products');
    }
  }
 );

  export const fetchCategoryProducts=createAsyncThunk(
    'product/fetchCategoryProducts',
    async (url,{rejectWithValue})=>{
        try {
            const {data}=await axiosInstance.get(`/products/categories/${url}`);
            return data;
        } catch (error) {
            return rejectWithValue('could not fetch category products');
        }
    }
 );


const productSlice=createSlice({
    name:'product',
    initialState:{
        loading:false,
        product:null,
        error:null,
        homePageProducts:[],
        selectedProduct:null,
        categories:[],
        categoryProducts:{
            products:[],
        },
    },
    reducers: {
        setSelectedProduct:(state,action)=>{
            state.selectedProduct=action.payload;
        },
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchHomePageProducts.pending,(state) =>{
            state.loading=true;
        });
        builder.addCase(fetchHomePageProducts.fulfilled,(state,action) => {
            state.loading=false;
            state.categories=action.payload.categories;
            state.homePageProducts=action.payload.products;
           
            
        });
        builder.addCase(fetchHomePageProducts.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });
        builder.addCase(saveProduct.pending,(state) =>{
         state.loading=true;
        });
        builder.addCase(saveProduct.fulfilled,(state) => {
            state.loading=false;
            state.error=null;    
        });
        builder.addCase(saveProduct.rejected,(state,action) => {
            state.loading=false;
            state.error=action.payload;
        });
        builder.addCase(fetchCategoryProducts.pending,(state) =>{
            state.loading=true;
        });
        builder.addCase(fetchCategoryProducts.fulfilled,(state,action) => {
            state.loading=false;
            state.categoryProducts=action.payload;
          
           
            
        });
        builder.addCase(fetchCategoryProducts.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

    },
});
export const  productReducer=productSlice.reducer;

export const {setSelectedProduct}=productSlice.actions;