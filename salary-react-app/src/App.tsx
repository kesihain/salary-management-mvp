import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Box, Button, Container, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import Menu from '@mui/icons-material/Menu';
import { ToastContainer } from 'react-toastify';
import { EmployeeListing } from './Components/EmployeeListing'

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container >
        <br></br>
        <ToastContainer></ToastContainer>
        <EmployeeListing></EmployeeListing>
      </Container>
    </Box>
  );
}


export default App;
