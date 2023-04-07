import { requester } from "./requester"
import { CONSTANTS } from "./index"

const url = `${CONSTANTS.baseUrl}/users`

export async function login(body) {
    const data = await requester(`${url}/login`, "POST", body)
    return data
}
export async function register(body) {
    const data = await requester(`${url}/register`, "POST", body)
    return data
}
export async function logout(){
    const data = await requester(`${url}/logout`, "GET")
    return data
}