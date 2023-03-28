import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import {
    Route,
    Routes,
} from "react-router-dom";
import Home from './components/Home/Home';
import { WorkoutList } from './components/WorkoutList/WorkoutList';
import Workout from './components/Details/Workout';
import { CreateWorkout } from './components/Create/CreateWorkout';
import { EditWorkout } from './components/Edit/EditWorkout';
import "./App.css"
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { ErrorOverlay } from './components/ErrorOverlay/ErrorOverlay';
import { Logout } from './components/Logout/Logout';
import { ErrorContext, ErrorProvider } from './contexts/ErrorContext';
import { Profile } from './components/Profile/Profile';
import { AuthProvider } from './contexts/AuthContext';
import { useContext } from 'react';
function App() {
    const { errorMessages } = useContext(ErrorContext)

    return (
        <AuthProvider>
            <Navigation />
            {errorMessages.map((e, i) => {
                return <div style={{ display: "flex", flexDirection: "column", position: "fixed", top: '70px' }}>
                    <ErrorOverlay key={i + 1} message={e} index={i} />
                </div>
            }
            )}
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/auth/login' element={<Login />}></Route>
                <Route path='/auth/logout' element={<Logout />}></Route>
                <Route path='/auth/register' element={<Register />}></Route>
                <Route path='/workout-list' element={<WorkoutList />}></Route>
                <Route path='/create/workout' element={<CreateWorkout />}></Route>
                <Route path='/workout-list/workout/:workoutId' element={<Workout />}></Route>
                <Route path='/workout-list/workout/:workoutId/edit' element={<EditWorkout />}></Route>
            </Routes>
        </AuthProvider>
    )
}

export default App
