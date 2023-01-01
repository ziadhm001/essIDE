import './App.css';
import {BrowserRouter as Router, Routes ,Route, Navigate} from "react-router-dom";

import Record from './components/Record/Record';
import Play from './components/Play/Play';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
let defaultVal = `/* This is Eliminating Silly Switching Online IDE.
* You can start coding & we will record the session for you!
*/
console.log('Hello world, from ESS');`

function App() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Router> 
      <Routes>
        <Route path='/record' element={
        user ? <Record defaultVal={defaultVal}/> : <Navigate to = '/'/>
        }
        />

        <Route path='/' element={
        !user ? <Login/> : <Navigate to = '/home'/>
        }
        />

        <Route path='/signup' element={
        !user ? <Signup/> : <Navigate to = '/home'/>
        }
        />

        <Route path='/home' element={
        user ? <Home/> : <Navigate to = '/'/>
        }
        />

        <Route path='/play' element={
        user ? <Play defaultVal={defaultVal}/> : <Navigate to = '/'/>
        }/>
    </Routes>
  </Router>
  );
}

export default App;
