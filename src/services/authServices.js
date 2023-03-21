import axios from "axios"
const basedUrl = "http://localhost:3030/users"

export const login = (data) => axios.post(`${basedUrl}/login`, data)