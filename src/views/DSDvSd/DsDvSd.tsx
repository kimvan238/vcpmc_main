import React from "react";
import './DsDvSd.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { FiEdit } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";

const DsDvSd = () => {
    const usageUnitData = [
      {
        id: 1,
        adminName: "Cty TNHH TM DV ABCDEF",
        contractNumber: "HD123",
        admin: "Admin 1",
        user: "21",
        deviceAssigned: "15",
        expiryDate: "21/04/2021",
        status: "Đang kích hoạt",
        action: "Xem chi tiết",
      },
      {
        id: 2,
        adminName: "Cty TNHH TM DV ABCDEF",
        contractNumber: "YQ14145145",
        admin: "Admin 2",
        user: "25",
        deviceAssigned: "35",
        expiryDate: "21/04/2021",
        status: "Đang kích hoạt",
        action: "Xem chi tiết",
      },
      {
        id: 3,
        adminName: "Cty TNHH TM DV ABCDEF",
        contractNumber: "UH1536167",
        admin: "Admin 3",
        user: "36",
        deviceAssigned: "14",
        expiryDate: "21/04/2021",
        status: "Đang kích hoạt",
        action: "Xem chi tiết",
      },
      {
        id: 4,
        adminName: "Cty TNHH TM DV ABCDEF",
        contractNumber: "TH2156355",
        admin: "Admin 4",
        user: "41",
        deviceAssigned: "47",
        expiryDate: "21/04/2021",
        status: "Nằng kích hoạt",
        action: "Xem chi tiết",
      },
      {
        id: 5,
        adminName: "Cty TNHH TM DV ABCDEF",
        contractNumber: "DG639148",
        admin: "Admin 5",
        user: "54",
        deviceAssigned: "53",
        expiryDate: "21/04/2021",
        status: "Đang kích hoạt",
        action: "Xem chi tiết",
      },
      // ... previous mock data objects
      {
        id: 6,
        adminName: "Cty TNHH TM DV ABCDEF",
        contractNumber: "HH41654",
        admin: "Admin 9",
        user: "29",
        deviceAssigned: "22",
        expiryDate: "21/04/2021",
        status: "Đang kích hoạt",
        action: "Xem chi tiết",
      },
      {
        id: 7,
        adminName: "Cty TNHH TM DV ABCDEF",
        contractNumber: "JD1466521",
        admin: "Admin 10",
        user: "48",
        deviceAssigned: "57",
        expiryDate: "21/04/2021",
        status: "Đang kích hoạt",
        action: "Xem chi tiết",
      },
      {
        id: 8,
        adminName: "Cty TNHH TM DV ABCDEF",
        contractNumber: "JH1567587",
        admin: "Admin 11",
        user: "37",
        deviceAssigned: "57",
        expiryDate: "21/04/2021",
        status: "Đang kích hoạt",
        action: "Xem chi tiết",
      },
      {
        id: 9,
        adminName: "Cty TNHH TM DV ABCDEF",
        contractNumber: "JH1567587",
        admin: "Admin 12",
        user: "37",
        deviceAssigned: "57",
        expiryDate: "21/04/2021",
        status: "Đang kích hoạt",
        action: "Xem chi tiết",
      },
      {
        id: 10,
        adminName: "Cty TNHH TM DV ABCDEF",
        contractNumber: "SG1562100",
        admin: "Admin 13",
        user: "59",
        deviceAssigned: "85",
        expiryDate: "21/04/2021",
        status: "Đang kích hoạt",
        action: "Xem chi tiết",
      },
      {
        id: 11,
        adminName: "Cty TNHH TM DV ABCDEF",
        contractNumber: "NW1432115",
        admin: "Admin 14",
        user: "42",
        deviceAssigned: "61",
        expiryDate: "21/04/2021",
        status: "Đang kích hoạt",
        action: "Xem chi tiết",
      },
      {
        id: 12,
        adminName: "Cty TNHH TM DV ABCDEF",
        contractNumber: "LR1598423",
        admin: "Admin 15",
        user: "33",
        deviceAssigned: "39",
        expiryDate: "21/04/2021",
        status: "Đang kích hoạt",
        action: "Xem chi tiết",
      },
      {
        id: 13,
        adminName: "Cty TNHH TM DV ABCDEF",
        contractNumber: "OE1684321",
        admin: "Admin 16",
        user: "27",
        deviceAssigned: "30",
        expiryDate: "21/04/2021",
        status: "Đang kích hoạt",
        action: "Xem chi tiết",
      },
    ];
    return (
      <>
        <div className="utility-container">
          <Language />

          <div>
            <h3>Danh sách đơn vị sử dụng</h3>
          </div>

          <div className="kbg-content">
            <div className="search-ctn">
              <form className="unit-listing">
                <input
                  type="text"
                  placeholder="Tên khoản giá trị, số hợp đồng,..."
                  name="search2"
                ></input>
                <span className="unit-search-icon">
                  <FiSearch></FiSearch>
                </span>
              </form>
            </div>
          </div>

          <div className="usage-unit-list ">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên tài khoản quản trị</th>
                  <th>Số hợp đồng</th>
                  <th>Admin</th>
                  <th>Người dùng</th>
                  <th>Thiết bị được chỉ định</th>
                  <th>Ngày hết hạn</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {usageUnitData.map((unit, index) => (
                  <tr key={unit.id}>
                    <td>{index + 1}</td>
                    <td>{unit.adminName}</td>
                    <td>{unit.contractNumber}</td>
                    <td>{unit.admin}</td>
                    <td>{unit.user}</td>
                    <td>{unit.deviceAssigned}</td>
                    <td>{unit.expiryDate}</td>
                    <td>{unit.status}</td>
                    <td className="action-link">{unit.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="menu-container">
          <div className="sub-menu">
            <GiCancel className="icon-menu"></GiCancel>
            <span className="span-menu">Xóa</span>
          </div>
        </div>

        <MenuBar />
      </>
    );
}

export default DsDvSd;