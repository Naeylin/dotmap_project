import axios from 'axios'
import { baseURL } from './env'

const instance = axios.create({
    baseURL
})

export default instance