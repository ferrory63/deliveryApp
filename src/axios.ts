import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://shift-backend.onrender.com/delivery',
})

export default instance
