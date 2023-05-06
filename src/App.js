
/*class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Tutorialspoint</h1>
            <ChangeName />
         </div>
      );
   }
}
class ChangeName extends React.Component {
   constructor(props) {
      super(props);
      this.state = { color: 'lightgreen' };
   }
   UNSAFE_componentWillMount() {
      // Changing the state immediately.
      this.setState({ color: 'wheat' });
   }
   render() {
      return (
         <div>
            <h1 style={{ color: this.state.color }}>Simply Easy Learning</h1>
         </div>
      );
   }
}
export default App;
 
  
  

*/
import react from './react'
import Proj1 from './Proj1'
import Proj2 from './Proj2'
import Proj3 from './Proj3'
import Drainagec from './Drainagec'
import Electricityc from './Electricityc'
import Waterc from './Waterc'
import Roadc from './Roadc'
import PER from './PER'
import Admin from './Admin'
import FB from './FB'
import Create from './Create'
import Com from './Com'
import Search from './Search'
import Percnt from './Percnt'
import Forgot from './Forgot'
import Contact from './Contact'
import About from './About'
import First from './First'
import Second from './Second'
import Street from './Street'
import Drain from './Drain'
import Water from './Water'
import Submit from './Submit';
import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      
    <div className="App">
      <Switch>
        <Route exact path="/" component={Proj1}></Route>
        <Route exact path="/Proj2" component={Proj2}></Route>
        <Route exact path="/Per" component={PER}></Route>
        <Route exact path="/Ad" component={Admin}></Route>
        <Route exact path="/Proj3" component={Proj3}></Route>
        <Route exact path="/Drainagec" component={Drainagec}></Route>
        <Route exact path="/Waterc" component={Waterc}></Route>
        <Route exact path="/Electricityc" component={Electricityc}></Route>
        <Route exact path="/Roadc" component={Roadc}></Route>
        <Route exact path="/Us" component={PER}></Route>
        <Route exact path="/Cr" component={Create}></Route>
        <Route exact path="/fb" component={FB}></Route>
        <Route exact path="/Com" component={Com}></Route>
        <Route exact path="/Sea" component={Search}></Route>
        <Route exact path="/Pcnt" component={Percnt}></Route>
        <Route exact path="/for" component={Forgot}></Route>
        <Route exact path="/Con" component={Contact}></Route>
        <Route exact path="/Abt" componenet={About}></Route>
        <Route exact path="/Fir" component={First}></Route>
        <Route exact path="/Second" component={Second}></Route>
        <Route exact path="/Street" component={Street}></Route>
        <Route exact path="/Drain" component={Drain}></Route>
        <Route exact path="/Water" component={Water}></Route>
        <Route exact path="/Submit" component={Submit}></Route>
      </Switch>
     
        
    </div>
    </Router>
  );
  }
export default App;
  