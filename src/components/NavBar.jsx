import React from 'react'
import Logo from '../assets/logo.png'
import {AppBar, Box, IconButton, Toolbar} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { selectToggler, toggleDrawer } from '../features/toggleSlice.js';
import { useSelector, useDispatch } from "react-redux";

import { Link } from 'react-router-dom';

const handleClick = (isShown, dispatch) => {
  dispatch(toggleDrawer(!isShown))
}

const NavBar = () => {
  const isShown = useSelector(selectToggler)
  const dispatch = useDispatch();
  return (
    //ff9933 ff6666
    <AppBar sx={{ position: 'relative', backgroundColor:"#6d8c9f" }}>
      <Toolbar>
        <IconButton
            color='#eba45e'
            aria-label="open drawer"
            edge="start"
            onClick={() => handleClick(isShown, dispatch)}
            sx={{ display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ p: '0.5rem'}}>
          <img src={Logo} style={{ height:"3rem", width: "10rem"}} alt="logo"/>
        </Box>
        <Toolbar sx={{ px: '1rem', width: '100%' }}>
          <Link to="/" style={{ color: 'inherit', padding: '2rem', textDecoration:"none", fontWeight:"bold", fontSize:"1.2rem" }}>Home</Link>
          <Link to="/history" style={{ color: 'inherit', padding: '1.2rem', textDecoration:"none", fontWeight:"bold" , fontSize:"1.2rem"   }}>History</Link>
        </Toolbar>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar