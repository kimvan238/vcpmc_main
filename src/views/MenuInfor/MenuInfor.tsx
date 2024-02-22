import React from "react";
import './MenuInfor.css';

import { RxExit } from "react-icons/rx";
import { FiEdit, FiLock } from "react-icons/fi";

import lg from '../../assets/images/vcpmc_logo.jpg';
import { useNavigate } from "react-router-dom";

function MenuInfor() {
    const navigate = useNavigate(); // Khởi tạo useNavigate

    // Hàm xử lý sự kiện khi nhấp vào "Sửa thông tin"
    const handleEditClick = () => {
      navigate("/edit-infor"); // Sử dụng navigate để chuyển đến trang '/edit-infor'
    };
    return (
      <>
        <div className="menu-container">
          <div className="sub-menu" onClick={handleEditClick}>
            <FiEdit className="icon-menu"></FiEdit>
            <span className="span-menu">Sửa thông tin</span>
          </div>

          <div className="sub-menu">
            <FiLock className="icon-menu"></FiLock>
            <span className="span-menu">Đổi mật khẩu</span>
          </div>

          <div className="sub-menu">
            <RxExit className="icon-menu"></RxExit>
            <span className="span-menu">Đăng xuất</span>
          </div>
        </div>

        {/* <div className="MenuBarMN">
                <div className="dropdownMN">
                    <button className="btnMN">Button</button>
                    <div className="dropdown-contentMN">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div> */}
      </>
    );
}

export default MenuInfor;