import react, { useEffect} from "react";
import { Link } from "react-router-dom";
import './App.css';
import './style.css';


export default function Topbar({useremail}){
 return (
        <div>
              <div className="topbar">
                 
    <Link to='/projects'><button className="btn btn-light">Projects</button></Link>
    <Link to='/skills'><button className="btn btn-light">Skills</button></Link>
    <Link to='/about'><button className="btn btn-light">About</button></Link>
    <Link to='/'><button className="btn btn-light">Home</button></Link>

              </div>
                </div>
    )
}