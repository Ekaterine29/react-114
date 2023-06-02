import React from 'react';
import { Box, styled } from '@mui/material';
import {BsFillBox2HeartFill} from 'react-icons/bs';

const StyledSidebarHeader=styled(Box)(()=>({
    padding:'0 15px',
    height:'64px',
    display:'flex',
    alignItems:'center',
    backgroundColor:'green',
}));

 export const SidebarHeader = () => {
  return <StyledSidebarHeader>
  <BsFillBox2HeartFill/>
  
  </StyledSidebarHeader>;
  
};

