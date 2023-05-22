import React from 'react';
import { TextField } from '@mui/material';

export const Input = ({
  type='text',
  name,
  label,
  onChange,
  error,
  value,
}) => {
  return (
  <TextField 
  type={type}
   name={name} 
   value={value} 
   onChange={onChange}
    label={label} 
    error={Boolean(error)} 
    helperText={error}
  sx={{
    marginTop:2,
    '& fieldset':{
      borderRadius:'20px',
    },
  }}
  />

  );
};