import "./App.css";
import './Style.css'
import { Link } from "react-router-dom" 
const App = () => {
  
  return (
    <>
    
      <marquee className="heading">
      YOU CAN REGISTER YOUR COMPLAINTS HERE !!!
      
    </marquee>
    
    <div className="abc">
      
      <div className="image36">
        <div className="image35"/>
        
      </div>
    </div>
    <a><Link to="/Proj2">
    <button className="nxt">Next</button>
    </Link>
    </a>
    </>
  );
};
export default App;
