import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Hyrje2 from "./components/Hyrje2";
import Hyrje1 from "./components/Hyrje1";
import Anash from "./components/Anash";
import Story from "./components/Story";
import Post from "./components/Post";
import Profil from "./components/Profil";
import Profilprivat from "./components/Profilprivat";
import Homepage from "./components/Homepage";
import Profiltj from "./components/Profiltj";
import Editprofile from "./components/Editprofile";
import Explore from "./components/Exp";
import Inbox from "./components/Inbox";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hyrje2 />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/profiliim" element={<Profil />}></Route>
        <Route path="/profilprivat" element={<Profilprivat />}></Route>
        <Route path="/profilpublic" element={<Profiltj />}></Route>
        <Route path="/reg" element={<Hyrje2 />}></Route>
        <Route  path="/reg1" element={<Hyrje1/>}   ></Route>
        <Route  path="/inbox"  element={<Inbox/>} ></Route>
        <Route path="/editprofile" element={<Editprofile />}></Route>
      <Route  path="/explore" element={<Explore/>}  />
      </Routes>
    </div>
  );
}

export default App;
