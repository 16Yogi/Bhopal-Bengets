// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Grouptour from './Pages/Grouptour';
import Destination from './Pages/Destination';
import Personaltour from './Pages/Personaltour';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Grouptour' element={<Grouptour/>}></Route>
          <Route path='/Destination' element={<Destination/>}></Route>
          <Route path='/Personaltour' element={<Personaltour/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
