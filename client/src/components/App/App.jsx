import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import "./App.css";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../../redux/store";

import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Reg from "../Reg/Reg";
import GamePole from "../GamePole/GamePole";





function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registration" element={<Reg/>} />
        <Route path="/game" element={<GamePole />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Home />} />
    </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
