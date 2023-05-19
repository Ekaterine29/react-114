import React from 'react';
import { FormContainer,Input } from '../atoms';

import { generateRegisterFormValues } from './generateRegisterFormValues';
import { useForm } from '../../hooks/useForm';


export const RegisterForm = () => {
    const {formValues:registerFormValues,onInputChange:onRegisterInputChange} = useForm({defaultFormValues:generateRegisterFormValues()});
    console.log('formVall',registerFormValues);
  return (
   <FormContainer>
    <Input name='firstName' label='firstName' value={registerFormValues.firstName.value} onChage={onRegisterInputChange} error={registerFormValues.firstName.error}/>
    <Input name='lastName' label='lastName' value={registerFormValues.lastName.value} onChage={onRegisterInputChange} error={registerFormValues.lastName.error}/>
    <Input name='email' label='email' value={registerFormValues.email.value} onChage={onRegisterInputChange} error={registerFormValues.email.error}/>
    <Input name='password'label='password' value={registerFormValues.password.value} onChage={onRegisterInputChange} error={registerFormValues.password.error}/>
   </FormContainer>
  );
};
