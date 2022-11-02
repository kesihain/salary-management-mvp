import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useRef  } from 'react'
import { deleteEmployee, updateEmployee } from '../Services/apiservice';
import { toastService } from '../Utils/utils';
import {toast } from 'react-toastify';
import { TextBlock } from './TextBlock';

export const UpdateEmployeeDialog = ({ updateDialog, setUpdateDialog, employee, setEmployee }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const closeUpdateDialog = () => {
        setUpdateDialog(false);
    };

    const handleNameChange = (event)=>{
        if(event.target.name == 'salary' && !/^\d+$/.test(event.target.value)){
            if(!toast.isActive(1)){
                toastService('Only Numbers allowed')
            }
            return;
        }else{
            console.log(event.target)
            setEmployee({ ...employee, [event.target.name]:event.target.value})
        }
    }

    const handleUpdateEmployee = () => {
        setUpdateDialog(false);
        updateEmployee(employee).then(result=>{
            toastService('Updated Employee')
        }).catch(err=>{
            
        })
    }


    return (
        <Dialog
            fullScreen={fullScreen}
            open={updateDialog}
            onClose={closeUpdateDialog}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                {"Update Employee"}
            </DialogTitle>
            <DialogContent>
                <Grid container sx={{ backgroundColor: '#BCBCBC', margin: '5px', borderRadius: '10px' }} spacing={1}>
                    <Grid item xs={12}>
                        <TextBlock text={`ID : ${employee.id}`}></TextBlock>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField sx={{ backgroundColor: 'whitesmoke', borderRadius: '5px' }} value={employee.name} onChange={handleNameChange} name="name" label="Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField sx={{ backgroundColor: 'whitesmoke', borderRadius: '5px' }} value={employee.login} onChange={handleNameChange} name="login" label="Login" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField sx={{ backgroundColor: 'whitesmoke', borderRadius: '5px', marginBottom:'8px' }} value={employee.salary} onChange={handleNameChange} name="salary" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} label="Salary" variant="outlined" />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={closeUpdateDialog}>
                    Close
                </Button>
                <Button onClick={handleUpdateEmployee} autoFocus>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
}