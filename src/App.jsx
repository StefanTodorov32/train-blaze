import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import {
    Route,
    Routes,
    useNavigate
} from "react-router-dom";
import Home from './components/Home/Home';
import { WorkoutList } from './components/WorkoutList/WorkoutList';
import Workout from './components/Details/Workout';
import { CreateWorkout } from './components/Create/CreateWorkout';
import { EditWorkout } from './components/Edit/EditWorkout';
import "./App.css"
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { AuthContext } from './contexts/AuthContext';
import { useState } from 'react';
import * as authService from "./services/authServices"
import { ErrorOverlay } from './components/ErrorOverlay/ErrorOverlay';
import { Logout } from './components/Logout/Logout';
import { ErrorContext } from './contexts/ErrorContext';
import { handleErrorMessages } from './utils/errorUtils';
function App() {
    const navigate = useNavigate()
    const [auth, setAuth] = useState({})
    const [errorMessages, setErrorMessages] = useState([])

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
    const contextError = {
        errorMessages,
        setErrorMessages
    }
    return (
        <ErrorContext.Provider value={contextError}>
            <AuthContext.Provider value={contextAuth}>
                <Navigation />
                {errorMessages.map((e, i) =>
                    <div style={{ display: "flex", flexDirection: "column", position: "fixed", top: '70px' }}>
                        <ErrorOverlay key={i} message={e} index={i} />
                    </div>
                )}
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/workout-list' element={<WorkoutList />}></Route>
                    <Route path='/auth/login' element={<Login />}></Route>
                    <Route path='/auth/logout' element={<Logout />}></Route>
                    <Route path='/auth/register' element={<Register />}></Route>
                    <Route path='/create/workout' element={<CreateWorkout />}></Route>
                    <Route path='/workout-list/workout/:workoutId' element={<Workout />}></Route>
                    <Route path='/workout-list/workout/:workoutId/edit' element={<EditWorkout />}></Route>
                </Routes>

            </AuthContext.Provider>
        </ErrorContext.Provider>
    )
}

export default App
