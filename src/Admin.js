import React from "react";
import './PERC.css'
import {Link} from "react-router-dom"
const App = props => (
  <LoginForm />
  );
  class LoginForm extends React.Component{
    render(){
      return(
        
        <div id="loginform">
      <div id="admin"><Link to="/Us"><h3>User login</h3></Link></div>
      <div className="text1">E-Complaint Records</div>
      <div className="text2">Standard Organisation</div>
      <FormHeader title="Admin Login" />
      <Form />
      <OtherMethods />
    </div>
  )
}
}

const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
 <div>
   <FormInput description="Username" placeholder="Enter your username" type="text" />
   <FormInput description="Password" placeholder="Enter your password" type="password"/>
   <Link to="/Proj3"><FormButton title="Log in"/></Link>
 </div>
);

const FormButton = props => (
<div id="button" class="row">
  <button>{props.title}</button>
</div>
);

const FormInput = props => (
<div class="row">
  <label>{props.description}</label>
  <input type={props.type} placeholder={props.placeholder}/>
</div>  
);

const OtherMethods = props => (
<div id="alternativeLogin">
<div className="forgot"><Link to="/for">forgot password</Link></div>
  <label>Or</label>
  <div className="loginwith">Login with</div>

  <Link to="/fb"><button  id="Facebook"></button></Link>
  <div id="Google">
  </div>
  <div id="Apple"></div>
</div>

);
export default App;
