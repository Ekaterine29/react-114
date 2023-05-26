import { AppBar, Box, Toolbar, styled } from '@mui/material';
import React from 'react';
import { Link } from '../atoms';
import { UserIcon } from './UserIcon';


const StyleAppBar=styled(AppBar)(({theme})=>({
  

   [theme.breakpoints.down('sm')]:{
    width:'100%',
    backgroundColor:'green',
   },
   [theme.breakpoints.up('sm')]:{
    width:'calc(100% - 255px)',
    backgroundColor:'teal',
   },
   padding:'0 37px 0 30px',
  
   
}));

const StyledToolBar=styled(Toolbar)(() => ({
    display:'flex',
    width:'100%',
    justifyContent:'space-between',
}))
;

export const Header = () => {
  return (
    <Box>
        <StyleAppBar>
            <StyledToolBar>
                <Link linkTo='/'>Home</Link>
                <UserIcon/>
            </StyledToolBar>
        </StyleAppBar>
        </Box>
  );
};
