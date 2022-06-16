import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

function Login() {
  const [account, setAccount] = React.useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const login = function () {
    dispatch({
      type: 'LOGIN',
      account,
    })
    navigate('/')
  }

  const handleChange = function (e) {
    setAccount({ ...account, [e.target.name]: e.target.value })
  }


  return (
    <div className='login-form container pt-5'>
      <h1>Login</h1>
      <form>
        <div className="form-outline mb-4">
          <input name="username" id="form2Example1" className="form-control"
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form2Example1">Email address</label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" name="password" id="form2Example2" className="form-control"
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="form2Example2">Password</label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4" onClick={login}>Sign in</button>
      </form>
    </div>
  )
}

export default Login