import axios from 'axios'
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API_ROOT = 'http://localhost:3001'

export const getEmployees = async ()=>{
    try {
        
        let result = await axios(
            {
                method: "GET",
                url: `${API_ROOT}/employees`,
              }
        )
        validateResponse(result)
        return result.data.data
    } catch (error) {
        throw(error)
    }
}

const validateResponse = (result)=>{
    if(![201,200,204].includes(result.data.code)){
        toast(`Unexpected Response or Request, Check request and try again later`, {
            position: "top-right",
            autoClose: 300,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        throw('Unexpected Response or Request, Check request and try again later')
    }
}
