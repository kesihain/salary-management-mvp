import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { AppBar, Box, Button, Container, Grid, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import Menu from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { getEmployees } from '../Services/apiservice';
import { DeleteEmployeeDialog } from './DeleteEmployeeDialog';
import { TextBlock } from './TextBlock'
export const EmployeeListing = () => {

    const [employeeData, setEmployeeData] = useState([]);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [employee, setEmployee] = useState({
        id: '',
        login: '',
        name: '',
        salary: 0
    })


    useEffect(() => {
        getEmployees().then(result => {
            console.log(result)
            setEmployeeData(result)
        });
    }, [deleteDialog])

    return (

        <Grid>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                Employees
            </Typography>
            <br></br>
            <DeleteEmployeeDialog deleteDialog={deleteDialog} setDeleteDialog={setDeleteDialog} employee={employee}></DeleteEmployeeDialog>
            <ListHeader></ListHeader>
            {employeeData.map(row => (
                <EmployeeItem setDeleteDialog={setDeleteDialog} item={row} setEmployee={setEmployee}></EmployeeItem>
            ))}
        </Grid>
    )
}

const EmployeeItem = ({ setDeleteDialog, item, setEmployee }) => {

    const handleDeleteDialog = (item) => {
        setEmployee(item)
        setDeleteDialog(true)
    }
    console.log(item)
    return (
        <Grid container sx={{ backgroundColor: '#BCBCBC', margin: '5px', borderRadius: '10px' }} spacing={1}>
            <Grid item xs={2}>
                <TextBlock text={item.id}></TextBlock>
            </Grid>
            <Grid item xs={2}>
                <TextBlock text={item.name}></TextBlock>
            </Grid>
            <Grid item xs={4}>
                <TextBlock text={item.login}></TextBlock>
            </Grid>
            <Grid item xs={2}>
                <TextBlock text={item.salary}></TextBlock>
            </Grid>
            <Grid item xs={2}>
                <IconButton size='small' sx={{ padding: 0 }}>
                    <EditIcon fontSize='small' />
                </IconButton>
                <IconButton onClick={() => handleDeleteDialog(item)} size='small' sx={{ padding: 0 }}>
                    <DeleteIcon fontSize='small' />
                </IconButton>
            </Grid>
        </Grid>
    )
}

const ListHeader = () => {
    return (

        <Grid container spacing={1}>
            <Grid item xs={2}>
                <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>id</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>Name</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>Login</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>Salary</Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>Action</Typography>
            </Grid>
        </Grid>
    )
}
