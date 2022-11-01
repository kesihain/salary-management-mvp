import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { deleteEmployee } from '../Services/apiservice';
import { TextBlock } from './TextBlock';

export const DeleteEmployeeDialog = ({ deleteDialog, setDeleteDialog, employee }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const closeDeleteDialog = () => {
        setDeleteDialog(false);
    };

    const handleDeleteEmployee = () => {
        deleteEmployee(employee.id).then(result => {
            setDeleteDialog(false)
        })
    }


    return (
        <Dialog
            fullScreen={fullScreen}
            open={deleteDialog}
            onClose={closeDeleteDialog}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                {"Delete Employee"}
            </DialogTitle>
            <DialogContent>
                <Grid container sx={{ backgroundColor: '#BCBCBC', margin: '5px', borderRadius: '10px' }} spacing={1}>
                    <Grid item xs={6}>
                        <TextBlock text={'ID : '}></TextBlock>
                    </Grid>
                    <Grid item xs={6}>
                        <TextBlock text={employee.id}></TextBlock>
                    </Grid>
                    <Grid item xs={6}>
                        <TextBlock text={'Name : '}></TextBlock>
                    </Grid>
                    <Grid item xs={6}>
                        <TextBlock text={employee.name}></TextBlock>
                    </Grid>
                    <Grid item xs={6}>
                        <TextBlock text={'Login : '}></TextBlock>
                    </Grid>
                    <Grid item xs={6}>
                        <TextBlock text={employee.login}></TextBlock>
                    </Grid>
                    <Grid item xs={6}>
                        <TextBlock text={'Salary : '}></TextBlock>
                    </Grid>
                    <Grid item xs={6}>
                        <TextBlock text={employee.salary}></TextBlock>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={closeDeleteDialog}>
                    Close
                </Button>
                <Button onClick={handleDeleteEmployee} autoFocus>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
}