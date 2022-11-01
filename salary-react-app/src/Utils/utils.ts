import {toast } from 'react-toastify';


export const toastService=(text)=>{
    toast(text, {
        position: "top-right",
        autoClose: 300,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
}