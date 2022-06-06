import Navbar from "./components/navbar/Navbar.jsx";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Post from "./pages/post/Post.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Footer from "./components/footer/Footer.jsx";
import Write from "./pages/write/Write.jsx";
import Search from "./pages/search/Search.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Settings from "./pages/settings/Settings.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="read/:id" element={<Post />} />
        <Route path="write" element={<Write />} />
        <Route path="update" element={<Write />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="search" element={<Search />} />
        <Route path="explore" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
