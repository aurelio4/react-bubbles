import React, { useState } from "react";
import { axiosWithHeader } from '../utils/axiosWithHeader'

const Login = (props) => {
  const [user, setUser] = useState({ username: '', password: '' })

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const getUserToken = e => {
    e.preventDefault()
    axiosWithHeader()
      .post('/api/login', user)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/bubbles')
      })
      .catch(err => console.error(err))
    setUser({ username: '', password: ''})
  }

  const handleChange = e => {
    setUser({...user, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <input type="text" placeholder="Username" name="username" value={user.username} onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
        <button onClick={getUserToken}>Submit</button>
      </form>
    </>
  );
};

export default Login;
