import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; 

function Login() {
  const [nameId, setNameId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login attempted with", nameId, password);
    navigate('/dashboard');
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div className="login-container" style={backgroundImageStyle}>
      <div className="login-card">
        <h1 className="text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="nameId">Name ID</label>
            <input
              type="text"
              className="form-control"
              id="nameId"
              value={nameId}
              onChange={(e) => setNameId(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
