// UserInfo.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserInfo.css";
import userAvatar from "../../assets/images/user-avatar.jpg"; // Đường dẫn tới avatar người dùng

const UserInfo = () => {
  const navigate = useNavigate();

  // Hàm để xử lý khi nhấp vào UserInfo
  const handleUserInfoClick = () => {
    navigate("/infor"); // Chuyển hướng người dùng đến trang thông tin
  };

  return (
    <div className="user-info-container" onClick={handleUserInfoClick}>
      <img src={userAvatar} alt="Avatar" className="user-avatar" />
      <div className="user-details">
        <div className="user-name">Ng.Tuyet</div>
        <div className="user-role">Admin</div>
      </div>
    </div>
  );
};

export default UserInfo;
