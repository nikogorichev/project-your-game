import React from 'react';
import { Link } from "react-router-dom"

function Nav() {
  const isAuth = false;
  return (
    <nav>
    <div className="nav-wrapper">
      {
        !isAuth 
      ?
      <><Link to="/" className="brand-logo">Your Game</Link><ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/registration">Регистрация</Link></li>
              <li><Link to="/login">Войти</Link></li>
            </ul></>
        :
      <><Link to="/game" className="brand-logo">Your Game</Link><ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/profile">Имя пользователя</Link></li>
              <li><Link to="/logout">Выйти</Link></li>
            </ul></>
      }
    </div>
  </nav>
  );
}

export default Nav;
