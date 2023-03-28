import { requester } from "./requester"

const basedUrl = "http://localhost:3030/users"

export async function login(body) {
    const data = await requester(`${basedUrl}/login`, "POST", body)
    return data
}
export async function register(body) {
    const data = await requester(`${basedUrl}/register`, "POST", body)
    return data
}
export async function logout(){
    const data = await requester(`${basedUrl}/logout`, "GET")
    return data
}