import React, { useState } from "react";
import "./MenuBar.css";
import {
  FaWarehouse,
  FaRegCalendarAlt,
  FaFileContract,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import { RiPlayList2Fill } from "react-icons/ri";
import { BsCaretRightFill } from "react-icons/bs";
import lg from "../../assets/images/vcpmc_logo.jpg";
import { Link } from "react-router-dom";
function MenuBar() {
  return (
    <>
      <div className="MenuBar">
        <div>
          <img src={lg} className="lg" />
        </div>
        <Link to="/kho-ban-ghi" className="subMenu">
          {" "}
          {/* Sử dụng Link ở đây */}
          <FaWarehouse className="icon"></FaWarehouse>
          <span className="spanMenu">Kho bản ghi</span>
        </Link>

        <Link to="/playlist" className="subMenu">
          {" "}
          {/* Sử dụng Link ở đây */}
          <RiPlayList2Fill className="icon"></RiPlayList2Fill>
          <span className="spanMenu">Playlist</span>
        </Link>

        <Link to="/ds-lich-phat" className="subMenu">
          <FaRegCalendarAlt className="icon" />
          <span className="spanMenu">Lập lịch phát</span>
        </Link>

        <div className="dropdownMN">
          <div
            className="subMenu"
            onClick={() => {
              /* logic để mở dropdown nếu cần */
            }}
          >
            <FaFileContract className="icon" />
            <span className="spanMenu">Quản lý</span>
          </div>
          <div className="dropdown-content-1">
            <Link to="/ds-hop-dong">Quản lý hợp đồng</Link>
            <Link to="/ds-thiet-bi">Quản lý thiết bị</Link>
            <Link to="/ds-uy-quyen">Quản lý ủy quyền</Link>
            <Link to="/ds-dv-sd">Đơn vị sử dụng</Link>
          </div>
        </div>

        <div className="dropdownMN">
          <div className="subMenu">
            <FaFileInvoiceDollar className="icon"></FaFileInvoiceDollar>
            <span className="spanMenu">Doanh thu</span>
          </div>
          <div className="dropdown-content-2">
            <a href="#">Báo cáo doanh thu</a>
            <Link to="/ls-doi-soat">Lịch sử kiểm soát</Link>
            <Link to="/pp-doanh-thu">Phân phối doanh thu</Link>
          </div>
        </div>

        <div className="dropdownMN">
          <div className="subMenu">
            <FiSettings className="icon"></FiSettings>
            <span className="spanMenu">Cài đặt</span>
          </div>
          <div className="dropdown-content-3">
            <Link to="/ds-nguoi-dung">Phân quyền người dùng</Link>
            <a href="#">Cấu hình</a>
            <a href="#">Quản lý hợp đồng</a>
            <Link to="/tt-tac-pham">Thông tin sản phẩmt</Link>
            <Link to="/chu-ky-dsoat">Chu kỳ kiểm soát</Link>
          </div>
        </div>

        <div className="dropdownMN">
          <div className="subMenu">
            <BsQuestionCircle className="icon"></BsQuestionCircle>
            <span className="spanMenu">Hỗ trợ</span>
          </div>
          <div className="dropdown-content-4">
            <a href="#">Hướng dẫn sử dụng</a>
            <Link to="/tai-app">Tải app</Link>
            <Link to="/feedback">Feedback</Link>
          </div>
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

export default MenuBar;
