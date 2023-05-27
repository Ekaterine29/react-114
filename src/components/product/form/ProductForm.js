import React, { useEffect, useState } from 'react';
import { Button, FormContainer, Input } from '../../atoms';
import { useForm } from '../../../hooks';
import { generateProductFormValues } from './generateProductFormValues';
import Filebase from 'react-file-base64';
import { useProduct } from '../../../hooks/useProduct';

 export const ProductForm = () => {

    const {formValues:productFormValues,onFormChange:onProductFormChange
    }=
    useForm({defaultFormValues:generateProductFormValues() });

    const {saveProduct,selectedProduct}=useProduct();
    const [image,setImage]=useState('');

    useEffect(()=>{
      if (selectedProduct){
        // setFormValues();

      }
    },[selectedProduct]);

    const onSave=() =>{
        const name=productFormValues.name.value;
        const description=productFormValues.description.value;
        const brand=productFormValues.brand.value;
        const category=productFormValues.category.value;
        const price=productFormValues.price.value;
        saveProduct({name,description,brand,category,price,image});
    };
   
  return (
    <FormContainer>
        <Input 
         name='name'
          value={productFormValues.name.value}
           onChange={onProductFormChange} 
           error={productFormValues.name.error}
            label='Product name'
             />
        <Input
          name='description'
           value={productFormValues.description.value}
            onChange={onProductFormChange}
             error={productFormValues.description.error} 
             label='Product description'
              /> 
        <Input
          name='category' 
          value={productFormValues.category.value}
           onChange={onProductFormChange}
            error={productFormValues.category.error} 
            label='Product category'
            />
        <Input 
         name='brand'
          value={productFormValues.brand.value}
           onChange={onProductFormChange}
            error={productFormValues.brand.error}
             label='Product brand'
             />
        <Input
          name='price'
           value={productFormValues.price.value}
            onChange={onProductFormChange}
             error={productFormValues.price.error}
              label='Product price'
               />
               <Filebase type='file' multiple={false} onDone={({base64}) =>{
                setImage(base64);

               }}
                />
                <Button onClick={onSave}>save product</Button>

    </FormContainer>
  );
};

