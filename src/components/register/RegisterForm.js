import React from 'react';
import { Button, FormContainer,Input } from '../atoms';

import { generateRegisterFormValues } from './generateRegisterFormValues';

import { useForm, useUser } from '../../hooks';



export const RegisterForm = () => {
    const {
      formValues:registerFormValues,
      onFormChange:onRegisterInputChange,
    } = useForm({defaultFormValues:generateRegisterFormValues() });
    
    const {authenticateUser} =useUser();



     const onRegister = ()=>{
     
      const firstName=registerFormValues.firstName.value;
      const lastName=registerFormValues.lastName.value;
      const email=registerFormValues.email.value;
      const password=registerFormValues.password.value;
      authenticateUser({
        formValues:{firstName,lastName,email,password},
        isLogin:false,
       });

     };

    

    console.log('formVall',registerFormValues);
  return (
   <FormContainer>
    <Input 
    name='firstName'
     label='firstName' 
     value={registerFormValues.firstName.value} 
     onChange={onRegisterInputChange} 
     error={registerFormValues.firstName.error}
     />
    <Input
     name='lastName'
      label='lastName'
       value={registerFormValues.lastName.value}
        onChange={onRegisterInputChange} 
        error={registerFormValues.lastName.error}
        />
    <Input
     name='email' 
     label='email'
      value={registerFormValues.email.value}
       onChange={onRegisterInputChange}
        error={registerFormValues.email.error}
        />
    <Input
     name='password'
     label='password'
     type='password'
      value={registerFormValues.password.value} 
      onChange={onRegisterInputChange} 
      error={registerFormValues.password.error}
      />
    <Button onClick={onRegister}>register</Button>
   </FormContainer>
  );
};
