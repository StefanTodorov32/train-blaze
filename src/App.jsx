import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import {
  Route,
  Routes,
  useNavigate
} from "react-router-dom";
import Home from './components/Home';
import { TrainingList } from './components/TrainingList';
import Workout from './components/Workout';
import { CreateProgram } from './components/CreateProgram';
import { EditProgram } from './components/EditProgram';
import "./App.css"
import { Login } from './components/Login';
import { Register } from './components/Register';
import { AuthContext } from './contexts/AuthContext';
import { useState } from 'react';
import * as authService from "./services/authServices"
import { ErrorOverlay } from './components/ErrorOverlay';
function App() {
  const navigate = useNavigate()
  const [auth, setAuth] = useState({})
  const [errorMessages, setErrorMessages] = useState([])

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data)
      setAuth(result.data)
      navigate("/training-list")
    } catch (e) {
      setErrorMessages(state => ([...state, e.response.data.message]))
      setTimeout(() => {
        setErrorMessages(state => {
          state.shift()
          return [...state]
        })
      }, 2000)
    }

  }

  const contextAuth = {
    onLoginSubmit,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken
  }
  return (
    <AuthContext.Provider value={contextAuth}>
      <Navigation />
      {errorMessages.map((e, i) =>
      <div style={{display: "flex", flexDirection: "column", position: "fixed", top: '70px'}}>
        <ErrorOverlay key={i} message={e} index={i}/>
      </div>
      )}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/training-list' element={<TrainingList />}></Route>
        <Route path='/auth/login' element={<Login />}></Route>
        <Route path='/auth/register' element={<Register />}></Route>
        <Route path='/create/program' element={<CreateProgram />}></Route>
        <Route path='/training-list/program/:programId' element={<Workout />}></Route>
        <Route path='/training-list/program/:programId/edit' element={<EditProgram />}></Route>
      </Routes>

    </AuthContext.Provider>
  )
}

export default App
