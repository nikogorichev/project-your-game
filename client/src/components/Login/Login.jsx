import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUserAC } from '../../redux/actionCreators/userAC';

function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigate()
  const [regError, setError] = useState()

  const {users} = useSelector(store => store.users)
  console.log(users);

  const loginUser = async (event) => {
    event.preventDefault();

    const {target} = event

    const data = { 
      email: target.email.value,
      password: target.password.value
    }

    const response= await fetch ("/login", {
      headers: {"content-type": "application/json"},
      method: "POST",
      body: JSON.stringify(data)
    })
    if (!response.ok) {
      const {error} = await response.json()
      setError(error)
    } else {
      const data= await response.json()
      dispatch(loginUserAC(data))
      navigation('/game')
    }
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
      {
        regError ? <div className="red-text">{regError}</div> : ''
      }

    </form>
  </div>
  )
}

export default Login;
