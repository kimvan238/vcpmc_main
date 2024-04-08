import React from "react";
import { useNavigate } from "react-router-dom";
import './DSNguoiDung.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { FiEdit } from "react-icons/fi";
import { TbFileExport } from "react-icons/tb";
import { FiUserPlus } from "react-icons/fi";

const DSNguoiDung = () => {
    const userDirectoryData = [
      {
        STT: "1",
        name: "Phan Manh Quynh",
        username: "PMQ_01",
        role: "Group Admin",
        status: "Đang kích hoạt",
        email: "pmq@gmail.com",
        phone: "029 813 6743",
        expiryDate: "02/12/2022",
        action: "Chỉnh sửa",
      },
      {
        STT: "2",
        name: "Chillies",
        username: "C-CHILI",
        role: "System Admin",
        status: "Đang kích hoạt",
        email: "pmgas@gmail.com",
        phone: "022 893 3111",
        expiryDate: "02/12/2022",
        action: "Chỉnh sửa",
      },
      { STT: '3', name: 'Đen Vâu', username: 'DEN', role: 'Super Admin', status: 'Đang kích hoạt', email: 'cidas@gmail.com', phone: '0212 5932 1214', expiryDate: '02/12/2024', action: 'Chỉnh sửa' },
  { STT: '4', name: 'Vũ Cát Tường', username: 'VCT_012', role: 'Licenses', status: 'Nằm ngủ kích hoạt', email: 'miasa@gmail.com', phone: '0230 3736 0539', expiryDate: '02/12/2025', action: 'Chỉnh sửa' },
  { STT: '5', name: 'Min', username: 'MIN_ST319', role: 'Licenses', status: 'Đang kích hoạt', email: 'miasaa@Gmail.com', phone: '032 000 2544', expiryDate: '02/12/2023', action: 'Chỉnh sửa' },
  { STT: '6', name: 'G-Dragon', username: 'GD', role: 'Licenses', status: 'Đang kích hoạt', email: 'kicizi@gmail.com', phone: '097 003 0256', expiryDate: '02/12/2026', action: 'Chỉnh sửa' },
  { STT: '7', name: 'Lisa', username: 'BP_L', role: 'Licenses', status: 'Nằm ngủ kích hoạt', email: 'bidz@gmail.com', phone: '097 585 3364', expiryDate: '02/12/2029', action: 'Chỉnh sửa' },
  { STT: '8', name: 'Lil Knight', username: 'LK', role: 'Account', status: 'Đang kích hoạt', email: 'nuas@gmail.com', phone: '079 353 2121', expiryDate: '02/12/2024', action: 'Chỉnh sửa' },
  { STT: '9', name: 'Bella Poarch', username: 'PHILIP_BEL', role: 'Account', status: 'Đang kích hoạt', email: 'ididas@gmail.com', phone: '078 364 2424', expiryDate: '02/12/2022', action: 'Chỉnh sửa' },
  { STT: '10', name: 'Alan Walker', username: 'ALLAN', role: 'Account', status: 'Đang kích hoạt', email: 'mixer@gmail.com', phone: '078 696 6564', expiryDate: '02/12/2029', action: 'Chỉnh sửa' },
  { STT: '11', name: 'Bruno Mars', username: 'BM1', role: 'Account', status: 'Đang kích hoạt', email: 'nexiv@gmail.com', phone: '025 001 3579', expiryDate: '02/12/2028', action: 'Chỉnh sửa' },
  { STT: '12', name: 'Nguyễn Hà', username: 'NH_SAD', role: 'Account', status: 'Đang kích hoạt', email: 'tuixid@gmail.com', phone: '035 369 3434', expiryDate: '02/12/2021', action: 'Chỉnh sửa' },

    ];
const navigate = useNavigate();
 const handleAddUserClick = () => {
   navigate("/them-ng-dung"); // This will navigate to the '/them-ng-dung' route
 };
    return (
      <>
        <div className="kbg-container">
          <Language />

          <div>
            <h3>Danh sách người dùng</h3>
          </div>
          <div className="user-tabset">
            <button className="user-tabset-button active">
              Danh sách người dùng
            </button>
            <button className="user-tabset-button">Vai trò người dùng</button>
          </div>
          <div className="kbg-content">
            <div className="search-ctn">
              <form className="user-list">
                <input
                  type="text"
                  placeholder="Tên hợp đồng, số hợp đồng, người ủy quyền..."
                  name="search2"
                ></input>
                <span className="icon-search">
                  <FiSearch></FiSearch>
                </span>
              </form>
            </div>
          </div>

          <div className="user-directory">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Họ tên</th>
                  <th>Tên đăng nhập</th>
                  <th>Vai trò</th>
                  <th>Trạng thái</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th>Ngày hết hạn</th>
                </tr>
              </thead>
              <tbody>
                {userDirectoryData.map((user) => (
                  <tr key={user.STT}>
                    <td>{user.STT}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.role}</td>
                    <td>{user.status}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.expiryDate}</td>
                    <td>
                      <a href="#">Chỉnh sửa</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="menu-container">
          <div className="sub-menu">
            <FiUserPlus className="icon-menu"></FiUserPlus>
            <span className="span-menu" onClick={handleAddUserClick}>
              Thêm người dùng
            </span>
          </div>
        </div>

        <MenuBar />
      </>
    );
}

export default DSNguoiDung;