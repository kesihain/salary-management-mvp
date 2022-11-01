import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toastService } from '../Utils/utils';
const API_ROOT = 'http://localhost:3001'

export const getEmployees = async () => {
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
        toastService(error.status)
        console.log(error)
        throw (error)
    }
}

const validateResponse = (result) => {
    if (![201, 200, 204].includes(result.data.code)) {
        toastService('Unexpected Response or Request, Check request and try again later')
        throw ('Unexpected Response or Request, Check request and try again later')
    }
}

export const uploadEmployees = async (file: File) => {
    let formData = new FormData()
    formData.append('file', file, file.name)
    axios.post(`${API_ROOT}/employees/upload`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }).then(result => {
        console.log(formData.get('file'))
        validateResponse(result)
        toastService('successfully uploaded employees')
    }).catch(error => {
        console.log(formData)
    })
}

export const deleteEmployee = async (id) => {
    try {

        let result = await axios(
            {
                method: "DELETE",
                url: `${API_ROOT}/employees/${id}`,
            }
        )
        validateResponse(result)
        return result.data.data
    } catch (error) {
        toastService(error.status)
        console.log(error)
        throw (error)
    }
}
