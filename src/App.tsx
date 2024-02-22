import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./views/Login/Login";
import ForgotPass from "./views/ForgotPass/forgot_pass";
import FPassSuccess from "./views/FPassSuccess/FPassSuccess";
import MenuBar from "./views/MenuBar/MenuBar"; // Nếu MenuBar hiển thị trên tất cả các trang, hãy đặt nó ngoài Routes
import Infor from "./views/Infor/Infor";
import EditInfor from "./views/EditInfo/EditInfor";
import KhoBanGhi from "./views/KhoBanGhi/KhoBanGhi";
import Playlist from "./views/Playlist/Playlist";
import AddPlaylist from "./views/AddPlaylist/AddPlayist";
import DSThietBi from "./views/DSThietBi/DSThietBi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPass />} />
            <Route path="/reset-password-success" element={<FPassSuccess />} />
            <Route path="/infor" element={<Infor />} />
            <Route path="/edit-infor" element={<EditInfor />} />
            <Route path="/kho-ban-ghi" element={<KhoBanGhi />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/ds-thiet-bi" element={<DSThietBi />} />
            <Route path="/add-playlist" element={<AddPlaylist />} />
            {/* Thêm các tuyến đường khác theo nhu cầu */}
          </Routes>
        </header>
        <ToastContainer
          position="bottom-center" 
          autoClose={800}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          style={{ zIndex: "9999" }}
        />
      </div>
    </Router>
  );
}

export default App;
