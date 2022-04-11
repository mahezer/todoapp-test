import axios from "axios"
import { API_URL } from "../../utils/constants"
import { toast } from 'react-toastify';

async function postAuth(uri: string, formData: any) {
    try {
        const data = await axios.post(`${API_URL}${uri}`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        toast.success("Created successfully!")
        return data;
    } catch(err) {
        toast.error("Error fetching data")
        throw err;
    }
}

export async function postRegister(formData: any)  {
    return postAuth('/auth/signup', formData);
}

export async function postLogin(formData: any) {
    const authData = await postAuth('/auth/login', formData);
    window.localStorage.setItem('token', authData.data.token)
    window.location.href = '/'
    return authData;
}