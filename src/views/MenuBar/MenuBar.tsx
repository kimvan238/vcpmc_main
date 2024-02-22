import React from "react";
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

        <div className="subMenu">
          <FaRegCalendarAlt className="icon"></FaRegCalendarAlt>
          <span className="spanMenu">Lập lịch phát</span>
        </div>
        <div className="dropdownMN">
          <div className="subMenu">
            <FaFileContract className="icon"></FaFileContract>
            <span className="spanMenu">Quản lý</span>
          </div>
          <div className="dropdown-content-1">
            <a href="#">Quản lý hợp đồng</a>
            <a href="#">Quản lý thiết bị</a>
            <a href="#">Quản lý ủy quyền</a>
            <a href="#">Đơn vị sử dụng</a>
          </div>
        </div>

        <div className="dropdownMN">
          <div className="subMenu">
            <FaFileInvoiceDollar className="icon"></FaFileInvoiceDollar>
            <span className="spanMenu">Doanh thu</span>
          </div>
          <div className="dropdown-content-2">
            <a href="#">Báo cáo doanh thu</a>
            <a href="#">Lịch sử kiểm soát</a>
            <a href="#">Phân phối doanh thu</a>
          </div>
        </div>

        <div className="dropdownMN">
          <div className="subMenu">
            <FiSettings className="icon"></FiSettings>
            <span className="spanMenu">Cài đặt</span>
          </div>
          <div className="dropdown-content-3">
            <a href="#">Phân quyền người dùng</a>
            <a href="#">Cấu hình</a>
            <a href="#">Quản lý hợp đồng</a>
            <a href="#">Thông tin sản phẩm</a>
            <a href="#">Chu kỳ kiểm soát</a>
          </div>
        </div>

        <div className="dropdownMN">
          <div className="subMenu">
            <BsQuestionCircle className="icon"></BsQuestionCircle>
            <span className="spanMenu">Hỗ trợ</span>
          </div>
          <div className="dropdown-content-4">
            <a href="#">Hướng dẫn sử dụng</a>
            <a href="#">Tải app</a>
            <a href="#">Feedback</a>
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
