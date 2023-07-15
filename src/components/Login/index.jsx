import React, { useState } from 'react';
import './login.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
  };

  return (
    <div className='login-container'>
   
      <form onSubmit={handleLogin}>
        <label>
        Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
        Enter your password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>

        <a style={{
            color:"#1565D8",
            fontFamily:'Inter',
            fontSize:'19px',
            fontStyle:'normal',
            fontWeight:'bold',
            lineHeight:'normal',
            textAlign:'center',
         
            textDecoration:'none'
        }} href="/signup_page">Don’t have an account? Register </a>
      </form>
    </div>
  );
};

export default Login;
