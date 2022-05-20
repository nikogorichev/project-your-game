import React from 'react';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserAC } from '../../redux/actionCreators/userAC';
import { useNavigate } from 'react-router-dom';
function Nav() {

  const dispatch = useDispatch();
  const navigation = useNavigate()

  const logoutUser = async (event) => {
    event.preventDefault();

    const response = await fetch ("/logout")
    const data= await response.json()
    console.log(data);
    dispatch(logoutUserAC(data))
    navigation('/')
  }

  const {users} = useSelector(store => store.users)

  return (
    <nav>
    <div className={"nav_wrapper"}>
      {
        !users.name 
      ?

      <><Link to="/" className="brand-logo">Your Game</Link><ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/registration">Регистрация</Link></li>
              <li><Link to="/login">Войти</Link></li>
            </ul></>
        :
      <><Link to="/game" className="brand-logo">Your Game</Link><ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/profile">{users.name}</Link></li>
              <li><Link to="/logout" onClick={logoutUser} >Выйти</Link></li>
            </ul></>
      }
    </div>
  </nav>
  );
}

export default Nav;
