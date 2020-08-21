import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";

function LoginForm(props) {
  useEffect(() => {document.body.style.backgroundColor = '#fff'}, []);
  
  const [state, setState] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    const {id, value} = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload={
      'username': state.username,
      'password': state.password,
    }
    redirectToHome();
  }

  const redirectToHome = () => {
    props.history.push('/home');
  }

  return (
    <div className='card col-12 col-lg-4 login-card mt-2 hv-center'>
      <form>
      <br />
        <div className='form-group text-left'>
          <label htmlFor='exampleUsername'>Username</label>
          <input type='username'
            className='form-control'
            id='username'
            placeholder='Username'
            value={state.username}
            onChange={handleChange}
          />
        </div>
        <div className='form-group text-left'>
          <label htmlFor='inputPassword'>Password</label>
          <input type='password'
            className='form-control'
            id='password'
            placeholder='Password'
            value={state.password}
            onChange={handleChange}
          />
          <br />
          <div className='row justify-content-center'>
            <button
              type='submit'
              className='btn btn-primary'
              onClick={handleSubmitClick}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default withRouter(LoginForm);