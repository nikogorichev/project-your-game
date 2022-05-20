import React from 'react';
import { useDispatch } from 'react-redux';
// import { loginUserAC } from '../../redux/actionCreators'

function Login() {
  const dispatch = useDispatch();

  const loginUser = (event) => {
    event.preventDefault();

    const {target} = event

    const data = { 
      email: target.email.value,
      password: target.password.value
    }

    // fetch ("/login", {
    //   headers: {"content-type": "application/json"},
    //   method: "POST",
    //   body: JSON.stringify(data)
    // })
    // .then(res => res.json())
    // .then(data => dispatch(loginUserAC(data)))
  }

  return (
    <div className="row">
    <form className="col s12" onSubmit={loginUser}>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" name='email' className="validate" required/>
          <label htmlFor='email'>Email</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" name='password' className="validate" required/>
          <label htmlFor='password'>Password</label>
        </div>
        <button type="submit" className="waves-effect waves-light btn-large">Войти</button>
      </div>

      
    </form>
  </div>
  )
}

export default Login;
