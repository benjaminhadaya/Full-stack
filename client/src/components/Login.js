import React, { useState } from 'react';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData(prevLoginData => ({
      ...prevLoginData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you will handle the login logic, such as sending a POST request to your backend
    console.log(loginData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" value={loginData.email} onChange={handleChange} required />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={loginData.password} onChange={handleChange} required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
