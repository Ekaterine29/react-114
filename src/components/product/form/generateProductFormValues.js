export const generateProductFormValues=() =>{
    return {
        name:{
            value:'',
            required  :true,
        error:'',
    validateInput: (name) =>
    name.length > 1 ? null : 'name should have at least 2 character',

},
description:{
    value: '',
    required:true,
    error:'',
    validateInput:(description) =>
    description.length >1  ? null: 'description should have at least 2 character',
},
category:{
    value: '',
    required:true,
    error:'',
    validateInput:(category) =>
    category.length >1 ? null: 'category should have at least 32character',
},
brand : {
    value:'',
    required:true,
    error:'',
    validateInput:(brand) =>
    brand.length >1 ? null: 'brand should have at least 32character',
  
},
price:{
    value: '',
    required:true,
    error:'',
    validateInput:(price) =>
    price >0 ? null: 'price should be positive number',
},
    };
};