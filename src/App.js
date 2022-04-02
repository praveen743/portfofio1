import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './style.css'
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        
              <Topbar/>
               
                <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/skills" element={<Skills/>}></Route>
                <Route path="/projects" element={<Projects/>}></Route>

                 
  </Routes> 
        
      </BrowserRouter >
    </div>
  );
}

export default App;
