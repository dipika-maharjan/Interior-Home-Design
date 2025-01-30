import React, { useState } from 'react';
import '../../styles/Signup.css';
import signupImage from '../../assets/images/signup.PNG';
import { Link } from 'react-router-dom';


function SignupPage(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(''); 
    const [success, setSuccess] = useState('');

    
  const handleSubmit = (event) => {
    event.preventDefault();

    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
        setError('Passwords do not match!');
        return;
    
  }

  console.log('Username:', username);
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('Confirm Password:', confirmPassword);

  setSuccess('Account created successfully!');
}



  return (
    <div className="signup-container">
      <div className="signup-image">
        <img src={signupImage} alt="Signup" />
      </div>
      <div className="sign-up">
        <h1>Sign up</h1>
        <p>Create your account</p>
        <div className="signup-description">
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            id="user-email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="button" onClick={handleSubmit}>
          Sign up
        </button>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <p>
          Already have an account?{' '}
          <Link to="/Login">Login</Link>
      
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
