import "./App.css";
import Login from "./pages/Auth/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-bg bg-no-repeat bg-cover">
      <Routes>
        <Route element={<Login />} path="/"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Register />} path="/register"></Route>
        <Route element={<Home />} path="/home"></Route>
      </Routes>
    </div>
  );
}

export default App;
