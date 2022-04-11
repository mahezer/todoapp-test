import axios from '../utils/axiosConstructor'
import { API_URL } from '../utils/constants'
import { toast } from 'react-toastify'

export async function fetchAllProjects() {
    const data = await axios.get(`${API_URL}/projects`)
    if (data.status === 401) {
        window.location.href = "/login";
        toast.error('Session expired!')
        return []
    }
    return data.data;
}