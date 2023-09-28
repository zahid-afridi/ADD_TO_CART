import * as React from 'react';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Outlet } from 'react-router-dom';

const linkStyle = {
  textDecoration: 'none', // Remove underline
  color: 'inherit', // Inherit text color
};

export default function ButtonAppBar() {
  // Use useSelector to get the cart state
  const pakcart = useSelector((state) => state.pakcart);

  return (
    <Box sx={{ flexGrow: 1 }}  sx={{position:'fixed',top:'0px',width:'100%',zIndex:'999'}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/' style={linkStyle}>
              PAK STORE
            </Link>
          </Typography>
          <Link to='/cart' style={linkStyle}>
            <Button variant="contained" color='success' size='large' >
              CART:<Typography variant='span' sx={{ fontWeight: 'bold', fontSize: "18px", fontFamily: 'arial' }}>{pakcart.length}</Typography>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Outlet></Outlet>
    </Box>
  );
}
