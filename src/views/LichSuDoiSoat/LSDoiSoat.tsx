import React from "react";
import './LSDoiSoat.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { FiEdit } from "react-icons/fi";
import { TbFileExport } from "react-icons/tb";

const LSDoiSoat = () => {
    const reconciliationData = [
      {
        id: 1,
        contractNumber: "HD123",
        exploitationUnit: "Cty TNHH TM DV ABCDEF",
        contractDuration: "10/07/2020 - 10/07/2021",
        contractType: "Trọn gói",
        totalPlays: "365",
        totalRevenue: "365.000.000",
        pendingRevenue: "1.000.000",
        settlementDate: "10/07/2021",
        action: "Xem chi tiết",
      },
      {
        id: 2,
        contractNumber: "YQ14145145",
        exploitationUnit: "Cty TNHH TM DV ABCDEF",
        contractDuration: "10/07/2020 - 10/07/2021",
        contractType: "Theo lượt phát",
        totalPlays: "250",
        totalRevenue: "2.500.000",
        pendingRevenue: "-",
        settlementDate: "10/07/2021",
        action: "Xem chi tiết",
      },
      {
        id: 3,
        contractNumber: "UH1536167",
        exploitationUnit: "Cty TNHH TM DV ABCDEF",
        contractDuration: "10/07/2020 - 10/07/2021",
        contractType: "Trọn gói",
        totalPlays: "425",
        totalRevenue: "425.000.000",
        pendingRevenue: "0",
        settlementDate: "10/07/2021",
        action: "Xem chi tiết",
      },
      {
        id: 4,
        contractNumber: "TH2156355",
        exploitationUnit: "Cty TNHH TM DV ABCDEF",
        contractDuration: "10/07/2020 - 10/07/2021",
        contractType: "Theo lượt phát",
        totalPlays: "400",
        totalRevenue: "400.000.000",
        pendingRevenue: "-",
        settlementDate: "10/07/2021",
        action: "Xem chi tiết",
      },
      {
        id: 5,
        contractNumber: "DG639148",
        exploitationUnit: "Cty TNHH TM DV ABCDEF",
        contractDuration: "10/07/2020 - 10/07/2021",
        contractType: "Trọn gói",
        totalPlays: "280",
        totalRevenue: "280.000.000",
        pendingRevenue: "5.000.000",
        settlementDate: "10/07/2021",
        action: "Xem chi tiết",
      },
      {
        id: 6,
        contractNumber: "FG638149",
        exploitationUnit: "Cty TNHH TM DV ABCDEF",
        contractDuration: "10/07/2020 - 10/07/2021",
        contractType: "Theo lượt phát",
        totalPlays: "250",
        totalRevenue: "250.000.000",
        pendingRevenue: "0",
        settlementDate: "30/07/2021",
        action: "Xem chi tiết",
      },
      {
        id: 7,
        contractNumber: "AB123456",
        exploitationUnit: "Cty TNHH TM DV XYZ",
        contractDuration: "01/06/2020 - 01/06/2021",
        contractType: "Trọn gói",
        totalPlays: "150",
        totalRevenue: "150.000.000",
        pendingRevenue: "0",
        settlementDate: "01/06/2021",
        action: "Xem chi tiết",
      },
      {
        id: 8,
        contractNumber: "CD789101",
        exploitationUnit: "Cty TNHH TM DV XYZ",
        contractDuration: "15/05/2020 - 15/05/2021",
        contractType: "Theo lượt phát",
        totalPlays: "175",
        totalRevenue: "175.000.000",
        pendingRevenue: "5.000.000",
        settlementDate: "15/05/2021",
        action: "Xem chi tiết",
      },
      {
        id: 9,
        contractNumber: "EF112131",
        exploitationUnit: "Cty TNHH TM DV XYZ",
        contractDuration: "20/04/2020 - 20/04/2021",
        contractType: "Trọn gói",
        totalPlays: "200",
        totalRevenue: "200.000.000",
        pendingRevenue: "0",
        settlementDate: "20/04/2021",
        action: "Xem chi tiết",
      },
      {
        id: 10,
        contractNumber: "GH415161",
        exploitationUnit: "Cty TNHH TM DV XYZ",
        contractDuration: "10/03/2020 - 10/03/2021",
        contractType: "Theo lượt phát",
        totalPlays: "220",
        totalRevenue: "220.000.000",
        pendingRevenue: "15.000.000",
        settlementDate: "10/03/2021",
        action: "Xem chi tiết",
      },
      {
        id: 11,
        contractNumber: "IJ718192",
        exploitationUnit: "Cty TNHH TM DV XYZ",
        contractDuration: "05/02/2020 - 05/02/2021",
        contractType: "Trọn gói",
        totalPlays: "190",
        totalRevenue: "190.000.000",
        pendingRevenue: "0",
        settlementDate: "05/02/2021",
        action: "Xem chi tiết",
      },
      {
        id: 12,
        contractNumber: "KL102122",
        exploitationUnit: "Cty TNHH TM DV XYZ",
        contractDuration: "12/01/2020 - 12/01/2021",
        contractType: "Theo lượt phát",
        totalPlays: "210",
        totalRevenue: "210.000.000",
        pendingRevenue: "0",
        settlementDate: "12/01/2021",
        action: "Xem chi tiết",
      },
      {
        id: 13,
        contractNumber: "MN123456",
        exploitationUnit: "Cty TNHH TM DV XYZ",
        contractDuration: "01/01/2020 - 01/01/2021",
        contractType: "Trọn gói",
        totalPlays: "300",
        totalRevenue: "300.000.000",
        pendingRevenue: "0",
        settlementDate: "01/01/2021",
        action: "Xem chi tiết",
      },
    ];
    return (
      <>
        <div className="revenue-summary-container">
          <Language />

          <div>
            <h3>Lịch sử đối soát doanh thu</h3>
          </div>

          <div className="reconciliation-history-container">
            <div className="reconciliation-history-item">
              <a className="kbg-f">Thời gian thực hiện: </a>
              <input
                className="settlement-date"
                type="date"
                value="2024-04-05"
              ></input>
            </div>

            <div className="search-ctn">
              <form className="billing-history">
                <input
                  type="text"
                  placeholder="Nhập tên tài khoản quản trị"
                  name="search2"
                ></input>
                <span className="revenue-search-icon">
                  <FiSearch></FiSearch>
                </span>
              </form>
            </div>
          </div>

          <div>
            <h5>Danh sách hợp đồng khai thác đã đối soát</h5>
          </div>

          <div className="transaction-log">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Số hợp đồng</th>
                  <th>Đơn vị khai thác</th>
                  <th>Thời hạn hợp đồng</th>
                  <th>Loại hợp đồng</th>
                  <th>Tổng lượt phát</th>
                  <th>Tổng doanh thu</th>
                  <th>Doanh thu chưa phân phối</th>
                  <th>Ngày chốt đổi soát</th>
                </tr>
              </thead>
              <tbody>
                {reconciliationData.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.contractNumber}</td>
                    <td>{data.exploitationUnit}</td>
                    <td>{data.contractDuration}</td>
                    <td>{data.contractType}</td>
                    <td>{data.totalPlays}</td>
                    <td>{data.totalRevenue}</td>
                    <td>{data.pendingRevenue}</td>
                    <td>{data.settlementDate}</td>
                    <td>
                      <a href="#">Xem chi tiết</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="menu-container">
          <div className="sub-menu">
            <TbFileExport className="icon-menu"></TbFileExport>
            <span className="span-menu">Xuất file</span>
          </div>
        </div>

        <MenuBar />
      </>
    );
}

export default LSDoiSoat;