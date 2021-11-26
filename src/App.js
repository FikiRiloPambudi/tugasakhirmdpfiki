import "./App.css";
import { BrowserRouter, NavLink, Route, Routes, Navigate } from "react-router-dom";
import Todo from "./Todo";
import Todo2 from "./Todo2";
import { HiHome } from "react-icons/hi";
import { MdGroup } from "react-icons/md";
import Detail from "./Detail";
import ProfilePage from "./component/ProfilePage";
import LoginPage from "./component/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
    <header>
      <p id="titleGroup">Matematika Ilmu yang Menyenangkan</p>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<LoginPage />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/todo2" element={<Todo2 />}></Route>
        <Route path="/todo/detail" element={<Detail />}></Route>
        <Route path="/todo2/detail" element={<Detail />}></Route>
        <Route path="/Profile" element={<ProfilePage />}></Route>
      </Routes>
      <footer>

        <NavLink to="/todo" className="iconWrapper">

          <HiHome className="icon" />

          Matematika Dasar

        </NavLink>

        <NavLink to="/profile" className="iconWrapper">

          <MdGroup className="icon" />

          Profile

        </NavLink>

        <NavLink to="/todo2" className="iconWrapper">
      
          <HiHome className="icon" />
        
          matematika Terapan

      </NavLink>
      </footer>
    </BrowserRouter>
  );
}