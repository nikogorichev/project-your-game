import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { regUserAC } from '../../redux/actionCreators/userAC';

function Reg() {
  const dispatch = useDispatch();
  const navigation = useNavigate()
  const [regError, setError] = useState()

  const {users} = useSelector(store => store.users)
  console.log(users);

  const regUser = async (event) => {
  event.preventDefault();
  const {target} = event

    const data = { 
      name: target.name.value,
      email: target.email.value,
      password: target.password.value
    }

    const response = await fetch ("/registration", {
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(data)
    })



    if (!response.ok) {
      const {error} = await response.json()
      setError(error)
    } else {
      const data= await response.json()
      dispatch(regUserAC(data))
      navigation('/game')
    }
  }

  return (
    <form className="col s12" onSubmit={regUser}>

      <div className="row">
        <div className="input-field col s12">
          <input id="name" type="text" name="name" className="validate" required/>
          <label htmlFor="name">Имя пользователя</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" name="email" className="validate" required/>
          <label htmlFor="email">Email</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" name="password" className="validate" required/>
          <label htmlFor="password">Password</label>
        </div>
      </div>

      <button type="submit" className="waves-effect waves-light btn-large row">Регистрация</button>

      {
        regError ? <div className="red-text">{regError}</div> : ''
      }
    </form>
  )
}

export default Reg;
