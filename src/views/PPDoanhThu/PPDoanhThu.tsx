import React from "react";
import './PPDoanhThu.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { FiEdit } from "react-icons/fi";
import { TbFileExport } from "react-icons/tb";

const PPDoanhThu = () => {
    const mockData = [
      {
        STT: 1,
        contract: "UC789",
        name: "Vương Anh Tú",
        songs: 15,
        revenue: "365.000.000",
        adminFee: "365.000.000",
        royalties: "365.000.000",
        settlementDate: "21/07/2021",
        action: "Xem chi tiết",
      },
      {
        STT: 2,
        contract: "UC789",
        name: "Nguyễn Đức Cường",
        songs: 30,
        revenue: "2.500.000",
        adminFee: "2.500.000",
        royalties: "2.500.000",
        settlementDate: "21/07/2021",
        action: "Xem chi tiết",
      },
      {
        STT: 3,
        contract: "UC789",
        name: "Hứa Kim Tuyền",
        songs: 25,
        revenue: "425.000.000",
        adminFee: "425.000.000",
        royalties: "425.000.000",
        settlementDate: "-",
        action: "Xem chi tiết",
      },
      {
        STT: 4,
        contract: "UC789",
        name: "Nguyễn Minh Cường",
        songs: 234,
        revenue: "400.000.000",
        adminFee: "400.000.000",
        royalties: "400.000.000",
        settlementDate: "-",
        action: "Xem chi tiết",
      },
      {
        STT: 5,
        contract: "UC789",
        name: "Nguyễn Hồng Thuận",
        songs: 23,
        revenue: "280.000.000",
        adminFee: "280.000.000",
        royalties: "280.000.000",
        settlementDate: "-",
        action: "Xem chi tiết",
      },
      {
        STT: 6,
        contract: "UC789",
        name: "Trang Pháp",
        songs: 33,
        revenue: "250.000.000",
        adminFee: "250.000.000",
        royalties: "250.000.000",
        settlementDate: "21/07/2021",
        action: "Xem chi tiết",
      },
      {
        STT: 7,
        contract: "UC789",
        name: "Vương Anh Tú",
        songs: 43,
        revenue: "400.000.000",
        adminFee: "400.000.000",
        royalties: "400.000.000",
        settlementDate: "-",
        action: "Xem chi tiết",
      },
      {
        STT: 8,
        contract: "UC789",
        name: "Vương Anh Tú",
        songs: 11,
        revenue: "400.000.000",
        adminFee: "400.000.000",
        royalties: "400.000.000",
        settlementDate: "21/07/2021",
        action: "Xem chi tiết",
      },
      {
        STT: 9,
        contract: "UC789",
        name: "Vương Anh Tú",
        songs: 12,
        revenue: "250.000.000",
        adminFee: "250.000.000",
        royalties: "250.000.000",
        settlementDate: "-",
        action: "Xem chi tiết",
      },
      {
        STT: 10,
        contract: "UC789",
        name: "Vương Anh Tú",
        songs: 13,
        revenue: "280.000.000",
        adminFee: "280.000.000",
        royalties: "280.000.000",
        settlementDate: "-",    
        action: "Xem chi tiết",
      },
      {
        STT: 11,
        contract: "UC789",
        name: "Vương Anh Tú",
        songs: 15,
        revenue: "365.000.000",
        adminFee: "365.000.000",
        royalties: "365.000.000",
        settlementDate: "21/07/2021",
        action: "Xem chi tiết",
      },
      {
        STT: 12,
        contract: "UC789",
        name: "Vương Anh Tú",
        songs: 24,
        revenue: "425.000.000",
        adminFee: "425.000.000",
        royalties: "425.000.000",
        settlementDate: "-",
        action: "Xem chi tiết",
      },
      {
        STT: 13,
        contract: "UC789",
        name: "Vương Anh Tú",
        songs: 24,
        revenue: "365.000.000",
        adminFee: "365.000.000",
        royalties: "365.000.000",
        settlementDate: "21/07/2021",
        action: "Xem chi tiết",
      },
    ];

    return (
      <>
        <div className="kbg-container">
          <Language />

          <div>
            <h3>Quản lý phân phối doanh thu</h3>
          </div>

          <div className="management-section">
            <div className="kbg-option">
              <a className="kbg-a">Thời gian thực hiện: </a>
              <input
                className="kbg-date"
                type="date"
                name="date"
                value="2024-04-06"
              ></input>
            </div>

            <div className="search-ctn">
              <form className="profit-dist-container">
                <input
                  type="text"
                  placeholder="Nhập tên bài hát"
                  name="search2"
                ></input>
                <span className="distribution-search-icon">
                  <FiSearch></FiSearch>
                </span>
              </form>
            </div>
          </div>

          <div>
            <h5>Danh sách hợp đồng ủy quyền</h5>
          </div>

          <div className="allocation-container">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Hợp đồng ủy quyền</th>
                  <th>Người ủy quyền</th>
                  <th>Số bài hát ủy quyền</th>
                  <th>Doanh thu (VND)</th>
                  <th>Hành chính phí (VND)</th>
                  <th>Mức nhuận bút (VND)</th>
                  <th>Ngày chốt đối soát</th>
                  <th>Chi tiết doanh thu</th>
                </tr>
              </thead>
             <tbody>
        {mockData.map((data, index) => (
          <tr key={index}>
            <td>{data.STT}</td>
            <td>{data.contract}</td>
            <td>{data.name}</td>
            <td>{data.songs}</td>
            <td>{data.revenue}</td>
            <td>{data.adminFee}</td>
            <td>{data.royalties}</td>
            <td>{data.settlementDate}</td>
            <td><a href="#">{data.action}</a></td>
          </tr>
        ))}
      </tbody>
            </table>
          </div>
        </div>

        <div className="menu-container">
          <div className="sub-menu">
            <TbFileExport className="icon-menu"></TbFileExport>
            <span className="span-menu">
              Xuất<br></br> dữ liệu
            </span>
          </div>
        </div>

        <MenuBar />
      </>
    );
}

export default PPDoanhThu;