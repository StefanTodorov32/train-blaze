import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import {
  Route,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import { TrainingList } from './components/TrainingList';
import Workout from './components/Workout';
import { CreateProgram } from './components/CreateProgram';
import { EditProgram } from './components/EditProgram';
import "./App.css"
function App() {

  return (



    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/training-list' element={<TrainingList />}></Route>
        <Route path='/create/program' element={<CreateProgram />}></Route>
        <Route path='/training-list/program/:programId' element={<Workout />}></Route>
        <Route path='/training-list/program/:programId/edit' element={<EditProgram />}></Route>
      </Routes>
    </>
  )
}

export default App
