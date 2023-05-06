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
      <div id="admin"><Link to="/Us"><h3>Go to login page</h3></Link></div>
      <FormHeader title="Forgot password" />
      <Form />
      
    </div>
  )
}
}

const FormHeader = props => (
  <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
 <div>
    <FormInput description="Username" placeholder="Enter your Username" type="text" />
   <FormInput description="Password" placeholder="Enter your new password" type="password" />
   <FormInput description="Password" placeholder="Re-enter your password" type="password"/>
   <Link to="/Us"><FormButton title="Change my password"/></Link>
   
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




export default App;
