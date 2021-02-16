

import React from 'react';
import ReactDOM from 'react-dom';


function Form() {
  return (
    <form>
 
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  

    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  

    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>

    
  
  <button type="submit" className="btn btn-primary"> Submit </button>
</form>
  );
}

export default Form;
