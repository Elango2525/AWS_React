import "./App.css";
import "./Com.css";
import {Link} from "react-router-dom"
const App = () => {
  return (
    <div className="mac-book-pro-16-5">
      <div className="untitled-design-1">
        <div className="rectangle-53">
          <div className="premium-organic-prod"  />
          <div className="flex-container">
            
            <span className="e-compliant-records">e-compliant records</span>
            <span className="standard-organisatio">standard organisation</span>
          </div>
          <div className="fluentpeople-communi"  />
          <div className="flex-container-1">
            <div className="flex-container-2">
              <div className="bxhome-alt-2"  />
              
              <span className="home"><a href="https://skcet.ac.in">Home</a></span>
              
              <span className="contact-us"><Link to="/con">Contact</Link></span>
              <div className="flat-color-iconsabou"  />
              <span className="about"><a href="https://pgportal.gov.in/Home/AboutUs">About</a></span>
              <div className="carbonhelp"  />
              <span className="helpf-aq"><Link to="/Sea">Menu</Link></span>
            </div>
            
              
              <div className="marq"><marquee><h6>Announcement: Contact detail is updated, every single category of complaints that we provided separate contact details.</h6></marquee></div>
              
              <div className="vector"  />
              
            </div>
          
        </div>
        <div className="rectangle-78"  />
        <span className="my-complaints">MY COMPLAINTS</span>
        <div className="flex-container-4">
          <div className="rectangle-1"  />
          <div className="cat-absolute-container">
            <div className="cat-absolute-container-1">
              <div className="cat-absolute-container-2">
                <div className="cat-absolute-container-3">
                  <div className="cat-absolute-container-4">
                    <div className="cat-absolute-container-5">
                      
                    </div>
                    <div className="rectangle-82"  />
                  </div>
                  <div className="rectangle-81"  />
                </div>
                <div className="rectangle-80"  />
              </div>
              <div className="rectangle-79"  />
            </div>
            <div className="rectangle-2"  />
          </div>
        </div>
        <div className="rectangle-112"><button className="sty"><Link to="/Fir">New Complaint</Link></button></div>
        <div className="rectangle-111"><button className="sty"><Link to="/Drainagec">My Exisiting complaint></Link></button>
        </div>
        <div className="rectangle-110">
          
          <button className="sty"><Link to="Pcnt">View complaint status</Link></button>
        </div>
        <div className="vector-4"  />
        <span className="this-site-is-designe">
          This site is designed, developed &amp; hosted by private Informatics
          Centre, information that are recorded here are confidential.
        </span>
      </div>
    </div>
  );
};
export default App;