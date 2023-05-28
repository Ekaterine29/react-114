import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";

export const saveProduct = createAsyncThunk(
    'product/saveProduct',
    async ({ product, isUpdating, id }, { rejectWithValue, dispatch }) => {
      try {
        let endpoint;
        let method;
  
        if (isUpdating) {
          endpoint = `/product/${id}`;
          method = 'put';
        } else {
          endpoint = '/product';
          method = 'post';
        }
  
        const { data } = await axiosInstance[method](endpoint, { product });
        dispatch(fetchHomePageProducts());
        return data;
      } catch (error) {
        return rejectWithValue('Could not save product');
      }
    }
  );
  

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
 
 export const fetchSingleProduct=createAsyncThunk(
    'product/fetchSingleProduct',
 async ({id,category},{rejectWithValue})=>{
    try {
        const {data}=await axiosInstance.get(
            `/products/category/${category}/${id}`
        );
        return data;  
    } catch (error)   {        

     rejectWithValue('could not fetch product');
   }
 });

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
        builder.addCase(fetchSingleProduct.pending,(state) =>{
            state.loading=true;
        });
        builder.addCase(fetchSingleProduct.fulfilled,(state,action) => {
            state.loading=false;
            state.singleProducts=action.payload.product;
          
           
            
        });
        builder.addCase(fetchSingleProduct.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        });

    },
});
export const  productReducer=productSlice.reducer;

export const {setSelectedProduct}=productSlice.actions;