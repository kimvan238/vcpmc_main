import React from "react";
import './DsUyQuyen.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { FiEdit } from "react-icons/fi";
import { VscAdd } from "react-icons/vsc";

const DsUyQuyen = () => {
    const partnerData = [
      {
        id: 1,
        name: "Amy Ngoc",
        username: "phm_L@gmail.com",
        email: "phm_L@gmail.com",
        expiration: "21/04/2021",
        phone: "021 593 1214",
        status: "Đang kích hoạt",
        action: "Cập nhật",
      },
      {
        id: 2,
        name: "Zachary Hoang",
        username: "Thi@hotmail.com",
        email: "Thi@hotmail.com",
        expiration: "22/04/2021",
        phone: "022 819 3111",
        status: "Đang kích hoạt",
        action: "Cập nhật",
      },
      {
        id: 3,
        name: "Bernadette Tố PhD",
        username: "V.Vinh50@yahoo.com",
        email: "V.Vinh50@yahoo.com",
        expiration: "23/04/2021",
        phone: "021 593 1215",
        status: "Đang kích hoạt",
        action: "Cập nhật",
      },
      {
        id: 4,
        name: "Moses Lâm",
        username: "H.Trinh68@gmail.com",
        email: "H.Trinh68@gmail.com",
        expiration: "24/04/2021",
        phone: "023 379 0539",
        status: "Nằm trong kích hoạt",
        action: "Cập nhật",
      },
      {
        id: 5,
        name: "Maurice Nhân",
        username: "Lm_c@hotmail.com",
        email: "Lm_c@hotmail.com",
        expiration: "25/04/2021",
        phone: "020 682 9520",
        status: "Đang kích hoạt",
        action: "Cập nhật",
      },
      {
        id: 6,
        name: "Bruce Sơn",
        username: "Mai59@hotmail.co",
        email: "Mai59@hotmail.co",
        expiration: "26/04/2021",
        phone: "026 977 8939",
        status: "Đang kích hoạt",
        action: "Cập nhật",
      },
      {
        id: 7,
        name: "Darlene Thi",
        username: "Nguyen67@yahoo.co",
        email: "Nguyen67@yahoo.co",
        expiration: "27/04/2021",
        phone: "025 346 0215",
        status: "Đang bị khóa",
        action: "Cập nhật",
      },
      {
        id: 8,
        name: "Jennifer Tuấn III",
        username: "Tng.Tho29@hotmail.com",
        email: "Tng.Tho29@hotmail.com",
        expiration: "28/04/2021",
        phone: "022 486 5280",
        status: "Đang kích hoạt",
        action: "Cập nhật",
      },
      // Continuing from the last ID number used above...
      {
        id: 9,
        name: "Amy Ngoc",
        username: "Phm_L@gmail.com",
        email: "Phm_L@gmail.com",
        expiration: "29/04/2021",
        phone: "021 591 6743",
        status: "Đang kích hoạt",
        action: "Cập nhật",
      },
      {
        id: 10,
        name: "Darlene Thi",
        username: "Thi@hotmail.com",
        email: "Thi@hotmail.com",
        expiration: "30/04/2021",
        phone: "022 813 3111",
        status: "Đang kích hoạt",
        action: "Cập nhật",
      },
      {
        id: 11,
        name: "Zachary Hoang",
        username: "V.Vinh50@yahoo.com",
        email: "V.Vinh50@yahoo.com",
        expiration: "01/05/2021",
        phone: "022 592 1214",
        status: "Đang kích hoạt",
        action: "Cập nhật",
      },
    ];
    return (
      <>
        <div className="partnership-list">
          <Language />
          <MenuBar />
          <div>
            <h3>Danh sách đối tác ủy quyền</h3>
          </div>

          <div className="kbg-content">
            <div className="search-ctn">
              <form className="partner-info">
                <input
                  type="text"
                  placeholder="Họ tên, tên đăng nhập, email..."
                  name="search2"
                ></input>
                <span className="partner-search-icon">
                  <FiSearch></FiSearch>
                </span>
              </form>
            </div>
          </div>

          <div className="partner-card">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Họ tên</th>
                  <th>Tên đăng nhập</th>
                  <th>Email</th>
                  <th>Ngày hết hạn</th>
                  <th>Số điện thoại</th>
                  <th>Trạng thái</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                {partnerData.map((partner, index) => (
                  <tr key={partner.id}>
                    <td>{index + 1}</td>
                    <td>{partner.name}</td>
                    <td>{partner.username}</td>
                    <td>{partner.email}</td>
                    <td>{partner.expiration}</td>
                    <td>{partner.phone}</td>
                    <td>{partner.status}</td>
                    <td className="update-action">{partner.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
}

export default DsUyQuyen;