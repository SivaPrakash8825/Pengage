import "./App.css";
import Login from "./pages/Auth/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";
import Plans from "./pages/plan/Plans";
import Details from "./pages/Auth/Details";


function App() {
  return (
    <div className="">
      <Routes>
        <Route element={<Login />} path="/"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Register />} path="/register"></Route>
        <Route element={<Home />} path="/home"></Route>
        <Route element={<Plans />} path="/plans"></Route>
        <Route element={<Details />} path="/details"></Route>
      </Routes>
    </div>
  );
}

export default App;
