const basedUrl = "http://localhost:3030/users"

export const login = (data) => fetch(`${basedUrl}/login`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
export const register = (data) => fetch(`${basedUrl}/register`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
export const logout = () => fetch(`${basedUrl}/logout`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
})