import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"
export const AuthUserGuard = () => {
    const { isAuthenticated } = useContext(AuthContext)
    return <>
        {isAuthenticated ? (<Outlet />) : <Navigate to="/auth/login" />}
    </>
}
