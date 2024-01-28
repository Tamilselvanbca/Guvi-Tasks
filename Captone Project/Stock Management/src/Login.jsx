import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login () {
  return (
<div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
      <div className='p-3 rounded w-25 border loginForm'>
        <h2 className='title'>Login </h2>
<form>
  <div className='mb-3'>
  <label htmlFor="email"><b>Email:</b></label>
  <input type="email" name='email' autoComplete='off' placeholder='Enter Email'
  className='form-control rounded-0'/>
  </div>
  <div className='mb-3'>
  <label htmlFor="password"><b>Password:</b></label>
  <input type="password" name='password'  placeholder='Enter Password'
  className='form-control rounded-0'/>
  </div>
  <Link to='/Dashboard'><button className='btn btn-success w-100 rounded-0 mb-2'>Signin</button></Link>
  <div className='mb-3'>
  <input type="checkbox" name='tick' id='tick' className='me-2'/>
  <label htmlFor="password">you agree with terms&condition</label>
  </div>
</form>
      </div>
    </div> 
  )
}

export default Login