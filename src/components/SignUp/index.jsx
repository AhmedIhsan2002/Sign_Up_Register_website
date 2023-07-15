import React, { useState } from 'react';
import PasswordStrengthIndicator from '../../components/PasswordStrengthIndicator/index'
import './Sign.css'
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Perform sign-up logic here
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    // Calculate password strength
    let strength = 0;
    if (passwordValue.match(/[a-z]/)) {
      strength += 1;
    }
    if (passwordValue.match(/[A-Z]/)) {
      strength += 1;
    }
    if (passwordValue.match(/[0-9]/)) {
      strength += 1;
    }
    if (passwordValue.match(/[!@#$%^&*()]/)) {
      strength += 1;
    }
    if (passwordValue.length >= 8) {
      strength += 1;
    }
    if (!/(.)\1\1/.test(passwordValue)) {
      strength += 1;
    }
    setPasswordStrength(strength);
  };

  return (
    <div className='signup-container'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label>
        Email address*:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number*:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
        Create password*:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <input type="checkbox" checked="checked"/>
        <h2>I agree to terms & conditions</h2>
        <br />
        <PasswordStrengthIndicator strength={passwordStrength} />
        <br />
        <button type="submit">Register Account</button><br />
        <button style={{
            borderRadius:'7px',
            background:'#fff',
            boxShadow:'0px 4px 10px 0px rgba(0, 0, 0, 0.08)',
            color:'#000',
            fontSize:'21px'
        }} type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignUp;
