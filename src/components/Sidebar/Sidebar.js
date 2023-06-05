import { Drawer } from '@mui/material';
import React from 'react';
import { SidebarContent } from './SidebarContent';
import { useProduct } from '../../hooks/useProduct';

 export const Sidebar = ({isDrawerOpen,setDrawerOpen}) => {
    const {categories}=useProduct();
  return (
    <>
    <Drawer 
    variant ='temporary'
     open={isDrawerOpen} 
     onClose={()=>{
        setDrawerOpen(!isDrawerOpen);
     }}
     ModalProps={{
        keepMounted:true,

     }}
     sx={{
        display:{ xs:'black',sm:'none'},
        '& .MuiDrawer-paper':{
            boxSizing:'border-box',
            width:'255px',
        },
     }}
     >
        <SidebarContent categories={categories}/>
     </Drawer>

     <Drawer
      variant ='permanent'
      open
      ModalProps={{
         keepMounted:true,
 
      }}
      sx={{
         display:{ sm:'block',xs:'none'},
         '& .MuiDrawer-paper':{
             boxSizing:'border-box',
             width:'255px',
         },
      }}
     >
        <SidebarContent categories={categories}/>

     </Drawer>
   
  </>
   
  );
};
