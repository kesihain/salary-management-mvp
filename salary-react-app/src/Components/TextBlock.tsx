import { Typography } from '@mui/material'
import React from 'react'


export const TextBlock = ({ text }) => {
    return (
        <Typography component="div" sx={{ flexGrow: 1, typography: { sm: 'body1', xs: 'body2' } }}>{text}</Typography>
    )
}