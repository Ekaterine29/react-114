import React from 'react';
import { Button, FormContainer, Input } from '../atoms';
import { useForm } from '../../hooks/useForm';
import { generateLoginFormValues } from './generateLoginFormValues';
import { useUser } from '../../hooks/useUser';



export const LoginForm = () => {
  const {formValues:loginFormValues,onFormChange:onLoginFormChange}=
  useForm({defaultFormValues: generateLoginFormValues()});
  
  const {authenticateUser}=useUser();

  const onLogin= () =>{
    const email=loginFormValues.email.value;
    const password=loginFormValues.password.value;
    authenticateUser({formValues:{email,password}, isLogin :true});
  };

  return (
    <FormContainer>
       <Input
          name='email'
          value={loginFormValues.email.value}
          onChange={onLoginFormChange}
          error={loginFormValues.email.error}
         />
        <Input
         name='password' 
         value={loginFormValues.password.value}
          onChange={onLoginFormChange}
           error={loginFormValues.password.error}
            type='password'
          />
      <Button onClick={onLogin}>login</Button>

    </FormContainer>
  );
};

