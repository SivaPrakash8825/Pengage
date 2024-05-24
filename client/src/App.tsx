import "./App.css";
import Login from "./pages/Auth/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home/Home";
import Profile from "./pages/profile/Profile";
function App() {
  return (
    <div className=" flex h-screen w-screen items-center justify-center overflow-x-hidden bg-bg bg-cover bg-no-repeat">
      <Routes>
        <Route element={<Login />} path="/"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Register />} path="/register"></Route>
        <Route element={<Home />} path="/home"></Route>
        <Route element={<Profile />} path="/profile"></Route>
      </Routes>
    </div>
  );
}

export default App;
