import axios from "axios";
import React, { useContext, useState } from "react";
import { LoginContext } from "../../state/loginContext";
import "./login_style.scss";
export const Login = () => {
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responses, setResponses] = useState("");
  const [loadder, setLoadder] = useState(false);
  const { isLogged, setIsLogged } = useContext(LoginContext);
  // API call functions
  const baseURL = "https://reqres.in/api/login";
  const loginValidation = (e) => {
    e.preventDefault();
    setLoadder(true);
    axios
      .post(baseURL, {
        email: email,
        password: password,
      })
      .then((response) => {
    setLoadder(false);

        setResponses(response.data.token);
        response.status === 200 ? (
          setIsLogged(true)
        ) : response.status === 400 ? (          
          alert("Oops! mail or password is incorrect")
        ) : (
          <p />
        );
      });
  };

  // form Validations
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    alert('A form was submitted with Name :"' + email + '"');
    
  };
  return (
    <div className="login">
      <div className="container">
        <h2>Login</h2>
        <form
          onSubmit={(e) => {
            
            loginValidation(e);
          }}
        >
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            required
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            required
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <br />
          {loadder === false ?  <input type="submit" value="Submit" />: Loader()}
        </form>
      </div>
    </div>
  );
};
function Loader() {
  return <div className="spinner-container">
    <div className="loading-spinner"></div>
  </div>;
}

