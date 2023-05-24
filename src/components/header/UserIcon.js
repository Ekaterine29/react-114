import { Avatar, Box, IconButton, Menu, MenuItem, styled } from '@mui/material'
import React, { useState } from 'react'
import { getUserInitials, isUserAdmin } from '../../helpers'
import { useUser } from '../../hooks/useUser';
import { Button } from '../atoms/Button';
import {  useNavigate } from 'react-router-dom';

const StyledBox=styled(Box)(() =>({
  dislpay:'flex',
  flexDirection:'column',
  borderRadius:10,
}));

 export const UserIcon = () => {
  const {userData,logout}= useUser();
  const [anchor,setAnchor]=useState(null);
  const navigate=useNavigate();

  return (
    <Box>
       <IconButton onClick={(e)=> setAnchor(e.currentTarget)}>
        <Avatar> 
          {getUserInitials(userData?.firstName,userData?.lastName)}
        </Avatar>
       </IconButton>
      <Menu
       anchorEl={anchor} 
       keepMounted 
        open ={Boolean(anchor)}
        onClose={()=>{
        setAnchor(null);
        }}
       >

     <StyledBox>
          {!!userData ? (
            <Box>
         <MenuItem>
          <Button 
          onClick={() =>{
            logout();
            setAnchor(null);
          }}
          >
            logout
            </Button>
            <MenuItem>
            {isUserAdmin(userData) && <Button onClick={()=>{
              navigate('/products/new');
              setAnchor(null);

            }}
            >
              add product</Button>}
            </MenuItem>
          </MenuItem>
          </Box>
        
    ) : (
     <Box>
        <MenuItem>
           <Button onClick={()=>{
            navigate('/login');
            setAnchor(null);
           }}
           >
            login
            </Button>
        </MenuItem>  

        <MenuItem>
          <Button onClick={()=>{
           navigate('/register');
           setAnchor(null);

          }}
          >
            register
            </Button>
         </MenuItem>
         </Box>
                
         )}
         </StyledBox>
       </Menu>
    </Box>
  );
};
