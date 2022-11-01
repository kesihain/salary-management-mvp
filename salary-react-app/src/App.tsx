import React from 'react';
import './App.css';
import { AppBar, Box,  Container, Fab, IconButton, Toolbar, Typography } from '@mui/material';
import Menu from '@mui/icons-material/Menu';
import { ToastContainer } from 'react-toastify';
import { EmployeeListing } from './Components/EmployeeListing';
import AddIcon from '@mui/icons-material/Add';
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={() =>
              <>
                <br></br>
                <EmployeeListing></EmployeeListing>
                <Fab sx={fabStyle} color="primary" aria-label="add">
                  <AddIcon onClick={()=>window.location.assign("/add")} fontSize='large'></AddIcon>
                </Fab>
              </>
            } />
            <Route path='/add' component={() =><></>}/>
          </Switch>
        </BrowserRouter>
      </Container>
    </Box>
  );
}

const fabStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',

};

export default App;
