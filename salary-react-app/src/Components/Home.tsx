import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { EmployeeListing } from './EmployeeListing'
import { toastService } from '../Utils/utils';
import { uploadEmployees } from '../Services/apiservice';

export const HomePage = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const openUploadDialog = () => {
        setOpen(true);
    };

    const closeUploadDialog = () => {
        setOpen(false);
    };


    type AcceptedFileGroup = "text/csv" | 'other';

    const [fileGroup, setFileGroup] = useState<AcceptedFileGroup>("text/csv");
    const [file, setFile] = useState<File>();


    const getFileType = (file: File): AcceptedFileGroup => {
        console.log(file.type)
        if (file.type == 'text/csv') {
            return 'text/csv'
        }
        toastService('Unexpected file type. Please use text/csv')
        return 'other'
    }

    const prepareFileUpload = (file: File) => {
        setFileGroup(getFileType(file));
        setFile(file);
    };


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.currentTarget;

        if (!files || !files[0]) {
            throw new Error("No file selected.");
        }

        prepareFileUpload(files[0]);
    };

    const handleSubmitCSV = () => {
        if (fileGroup != 'text/csv') {
            toastService('Unexpected file type. Please use text/csv')
            return
        }
        if (file.size / 1024 > 2) {
            toastService('File size too large')
            return;
        }
        uploadEmployees(file).then(result=>{
            
        })
    }

    return (
        <>
            <EmployeeListing></EmployeeListing>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={closeUploadDialog}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Upload Employee CSV"}
                </DialogTitle>
                <DialogContent>
                    <input onChange={onChange} accept="text/csv" type="file" />
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={closeUploadDialog}>
                        Close
                    </Button>
                    <Button onClick={handleSubmitCSV} autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            <Fab sx={fabStyle} color="primary" aria-label="add">
                <AddIcon onClick={openUploadDialog} fontSize='large'></AddIcon>
            </Fab>
        </>
    )
}

const fabStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',

};