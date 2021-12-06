import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import { Link } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../Context/useAuth';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();
    const {user, LogOut, admin} = useAuth();
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    const handleLogin = () => {
        navigate('/login');
    }
   
    return (
        <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              
            </Typography> */}
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {/* {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))} */}
                <div>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"><Link style={{color: 'white', textDecoration: 'none'}} to="/home">Home</Link></Typography>
                  </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"><Link style={{color: 'white', textDecoration: 'none'}} to="/loans">Loans</Link></Typography>
                  </MenuItem>
                {!admin && <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"><Link style={{color: 'white', textDecoration: 'none'}} to="/users">Applied Loans</Link></Typography>
                  </MenuItem>}
                { admin && <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"><Link style={{color: 'white', textDecoration: 'none'}} to="/manageLoans">Manage Loans</Link></Typography>
                  </MenuItem>}
                {/* <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"></Typography>
                  </MenuItem> */}
                </div>
              </Menu>
            </Box>
            {/* <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              
            </Typography> */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {/* {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))} */}
              <div style={{display: 'flex',}}>
              <MenuItem  onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"><Link style={{color: 'white', textDecoration: 'none'}} to="/home">Home</Link></Typography>
                  </MenuItem>
              <MenuItem  onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"><Link style={{color: 'white', textDecoration: 'none'}} to="/loans">Loans</Link></Typography>
                  </MenuItem>
             {!admin && <MenuItem  onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"><Link style={{color: 'white', textDecoration: 'none'}} to="/users">Applied Loans</Link></Typography>
                  </MenuItem>}
             { admin && <MenuItem  onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"><Link style={{color: 'white', textDecoration: 'none'}} to="/manageLoans">Manage Loans</Link></Typography>
                  </MenuItem>}
              </div>
            </Box>
  
            <Box sx={{ flexGrow: 0 }}>
            {user.displayName && <Button style={{color: 'white'}}>{user.displayName}</Button>} 
            {user.displayName? <Button onClick={LogOut} style={{color: 'white'}}>Logout</Button> : <Button onClick={handleLogin} style={{color: 'white'}}>Login</Button>}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Navbar;