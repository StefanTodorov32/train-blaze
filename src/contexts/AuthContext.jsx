import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleErrorMessages } from "../utils/errorUtils";
import * as authService from "../services/authServices"
import { ErrorContext } from "./ErrorContext";

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useState({})
    const navigate = useNavigate()
    const { setErrorMessages} = useContext(ErrorContext)

    const onLoginSubmit = async (data) => {
        const res = await authService.login(data)
        const result = await res.json()
        if (result.code === 403) {
            return handleErrorMessages(setErrorMessages, "Wrong Password or Username!")
        } else {
            setAuth(result)
            navigate("/workout-list")
        }
    }

    const onRegisterSubmit = async (data) => {
        const { rePassword, ...registerData } = data
        if (rePassword !== registerData.password) {
            return handleErrorMessages(setErrorMessages, "Passwords are not matching!")
        }
        const res = await authService.register(data)
        const result = await res.json()
        if (result.code === 403) {
            return handleErrorMessages(setErrorMessages, result.message)
        } else {
            setAuth(result)
            navigate("/workout-list")
        }
    }

    const onLogout = async () => {
        await authService.logout()
        setAuth({})
    }

    const contextAuth = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken
    }

    return <>
        <AuthContext.Provider value={contextAuth}>
            {children}
        </AuthContext.Provider>
    </>
}