import './App.css';
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Record from './components/Record/Record';
import Play from './components/Play/Play';
import Home from './components/Home/Home';
let defaultVal = `/* This is Eliminating Silly Switching Online IDE.
* You can start coding & we will record the session for you!
*/
console.log('Hello world, from ESS');`

function App() {
  return (
    <Router> 
      <Routes>
        <Route path='/record' element={
          <Record defaultVal={defaultVal}/>
        }/>

        <Route path='/' element={
          <Home/>
        }
        
        />
        <Route path='/play' element={
          <Play defaultVal={defaultVal}/>
        }/>
    </Routes>
  </Router>
  );
}

export default App;
