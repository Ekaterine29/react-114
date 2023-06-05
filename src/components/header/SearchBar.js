import { Autocomplete, TextField ,Box} from '@mui/material';
import React ,{useState,useEffect} from 'react';
import {Link,Text} from "../atoms";
import { useProduct } from '../../hooks/useProduct';

 export const SearchBar = () => {
    const [searchQuery,setSearchQuery]=useState("");
    const {searchProducts,searchResults,clearSearchResults}=useProduct();

    useEffect(()=>{
      const timerId=setTimeout(()=>{
        if (searchQuery) {
          searchProducts(searchQuery);
        } else {
          clearSearchResults();
          
        }
      },300);
        return ()=> {
          clearTimeout(timerId);
        };
     
    },[searchQuery]);
   
  return(
   <Autocomplete 
   freeSolo 
   sx={{width:400}}
   disableClearable
   options={searchResults}
   getOptionLabel={(option) =>option.name}
   renderOption={(_,option) =>{
    const {name,category,_id,price}=option;
    return (
        <Link
        to={`/products/categories/${category}/${_id}`}
    key={_id}
    state={{id:_id}}
  >

  <Box>
    <Text>{name}</Text>
    <Text>{price}</Text>
  </Box>  
  </Link>
    );
   }}
   renderInput={(params)=>{
    return (
        <TextField
        {...params}
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        label="Search products"
        InputProps={{
            ...params.InputProps,
            type:"search",
        }}
        />
    );
   }}
   />
  );
};

