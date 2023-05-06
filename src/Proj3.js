import "./App.css";
import "./Style2.css"
import { Link } from "react-router-dom" 
const App = () => {
  return(
    <>
    <div className="bg">
    <center><div className="box3"><marquee>VIEW COMPLAINT STATUS</marquee></div></center>
    <div className="allign">
  <a>
    <Link to="/Drainagec"><button className="rec1">Drainage</button></Link></a>
    <a><Link to="/Waterc"><button className="rec2">Water</button></Link></a>
    <a><Link to="/Electricityc"><button className="rec3">Electricity</button></Link></a>
    <a><Link to="/Roadc"><button className="rec4">Road</button></Link></a>
    </div>
    </div>
    </>
  )
};
export default App;