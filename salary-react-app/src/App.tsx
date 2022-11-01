import React from 'react';
import './App.css';
import { AppBar, Box,  Container, IconButton, Toolbar, Typography } from '@mui/material';
import Menu from '@mui/icons-material/Menu';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from './Components/Home';

function App() {

  const [open, setOpen] = React.useState(false);
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
            Payroll App
          </Typography>
        </Toolbar>
      </AppBar>
      <ToastContainer></ToastContainer>
      <Container >
            <br></br>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={() =>
              <HomePage></HomePage>
            } />
            <Route path='/add' component={() =><></>}/>
          </Switch>
        </BrowserRouter>
      </Container>
    </Box>
  );
}


export default App;
