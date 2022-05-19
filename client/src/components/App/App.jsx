import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../../redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
