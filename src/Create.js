import React from "react";
import './Create.css'
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
      <FormHeader title="Create account" />
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
   <FormInput description="Create username" placeholder="Enter your username" type="text" />
   <FormInput description="Date of birth" placeholder="Enter your username" type="date" />
   <FormInput description="Password" placeholder="Enter your password" id="password" type="password"/>
   <FormInput description="Re-enterPassword" placeholder="Enter your password" id="confirm_password"  type="password"/>

   <Link to="/Com"><FormButton title="Sign up"/></Link>
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
  <label>Or sign-up with</label>

  <Link to="/fb"><button  id="Facebook"></button></Link>
  <div id="Google">
  </div>
  <div id="Apple"></div>

</div>

);
export default App;
