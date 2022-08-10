import React from "react";

class LoggedinComponent extends React.Component{
  render(){
      return <div className="loggedin">
      <h1 className="text-center">✔️ Login Successful</h1>

      <h3 className="text-center text-danger">You are logged in with help of Lyra Authenticator</h3>
    </div>;
  }
}

export default LoggedinComponent;