import {useState} from 'react';

export const useForm= ({defaultFormValue}) =>{
    const [formValues,setFormValues]=useState(defaultFormValue);
    
    const onInputChange = (e) => {
        const {name,value}=e.target;
    
        const {validateInput}= formValues[name];

        setFormValues((prevFormValues)=>{
            return {
                ...prevFormValues,
                [name]:{
                    ...prevFormValues[name],
                    value,
                    error:validateInput ? validateInput(value) : undefined,
                },
            };
        });
    };
const clearForm= (obj) => {
    setFormValues(obj);
};
return {
    formValues,
    onInputChange,
    clearForm
};
};
const x={
email:{
    value: '',
    required:true,
    error:null,
    validateInput:(email)=>
    email.includes('@gmail.com') ? '' : 'email is not valid',

},
password: {
    value: '',
    required: true,
    error: null,
    validateInput:(password) =>
    password.length >6 ? '' : 'passwordshould have at least 6 characters',
},
};