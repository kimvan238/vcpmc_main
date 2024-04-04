import React from "react";
import './DSHopDong.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { FiEdit } from "react-icons/fi";
import { VscAdd } from "react-icons/vsc";
import { Link } from "react-router-dom";

const DSHopDong = () => {
  const contractDataSample = [
    {
      id: 1,
      contractNumber: "HD123",
      contractName: "Hợp đồng ủy quyền bài hát",
      authorizedPerson: "Vương Anh Tú",
      ownership: "Người biểu diễn",
      contractStatus: "Còn thời hạn",
      creationDate: "01/04/2021",
    },
    {
      id: 2,
      contractNumber: "QK1415145",
      contractName: "Hợp đồng ủy quyền bài hát",
      authorizedPerson: "Khắc Hưng",
      ownership: "Người biểu diễn",
      contractStatus: "Còn thời hạn",
      creationDate: "12/03/2021",
    },
    {
      id: 3,
      contractNumber: "UH1563167",
      contractName: "Hợp đồng ủy quyền album",
      authorizedPerson: "Châu Đăng Khoa",
      ownership: "Nhà sản xuất",
      contractStatus: "Còn thời hạn",
      creationDate: "14/02/2021",
    },
    {
      id: 4,
      contractNumber: "TH2156355",
      contractName: "Hợp đồng sản xuất nhạc phim",
      authorizedPerson: "Phan Mạnh Quỳnh",
      ownership: "Nhà sản xuất",
      contractStatus: "Còn thời hạn",
      creationDate: "01/01/2021",
    },
    {
      id: 5,
      contractNumber: "DG639148",
      contractName: "Hợp đồng quản lý nghệ sĩ",
      authorizedPerson: "Karik",
      ownership: "Người biểu diễn",
      contractStatus: "Còn thời hạn",
      creationDate: "23/12/2020",
    },
    {
      id: 6,
      contractNumber: "FG638149",
      contractName: "Hợp đồng thu âm",
      authorizedPerson: "Binz",
      ownership: "Nhà sản xuất",
      contractStatus: "Còn thời hạn",
      creationDate: "01/11/2020",
    },
    {
      id: 7,
      contractNumber: "HG252603",
      contractName: "Hợp đồng phát hành đĩa nhạc",
      authorizedPerson: "JustaTee",
      ownership: "Người biểu diễn",
      contractStatus: "Còn thời hạn",
      creationDate: "10/10/2020",
    },
    {
      id: 8,
      contractNumber: "DG253321",
      contractName: "Hợp đồng tổ chức concert",
      authorizedPerson: "Đen Vâu",
      ownership: "Nhà sản xuất",
      contractStatus: "Còn thời hạn",
      creationDate: "15/09/2020",
    },
    {
      id: 9,
      contractNumber: "HD314159",
      contractName: "Hợp đồng phân phối nhạc số",
      authorizedPerson: "Trần Huyền Nhung",
      ownership: "Nhà sản xuất",
      contractStatus: "Đã hủy",
      creationDate: "22/08/2020",
    },
    {
      id: 10,
      contractNumber: "HD271828",
      contractName: "Hợp đồng ủy quyền sáng tác",
      authorizedPerson: "Nguyễn Anh Dũng",
      ownership: "Người biểu diễn",
      contractStatus: "Đã hủy",
      creationDate: "05/07/2020",
    },
    {
      id: 11,
      contractNumber: "HD161803",
      contractName: "Hợp đồng tổ chức sự kiện âm nhạc",
      authorizedPerson: "Phạm Thanh Hà",
      ownership: "Nhà sản xuất",
      contractStatus: "Đã hủy",
      creationDate: "17/06/2020",
    },
  ];
    return (
      <>
        <div className="agreement-archive">
          <Language />

          <div>
            <h3>Danh sách hợp đồng</h3>
          </div>
          <div className="tab-container">
            <button className="tab-button active">Hợp đồng ủy quyền</button>
            <button className="tab-button">Hợp đồng khai thác</button>
          </div>

          <div className="deal-details">
            <div className="kbg-option">
              <a className="kbg-d">Quyền sở hữu: </a>
              <select className="contract-select" name="cars" id="cars">
                <option>Tất cả</option>
                <option value="volvo">Người biểu diễn</option>
                <option value="saab">Nhà sản xuất</option>
              </select>
            </div>

            <div className="kbg-option">
              <a className="kbg-d">Hiệu lực hợp đồng: </a>
              <select className="contract-select" name="cars" id="cars">
                <option value="volvo">Tất cả</option>
                <option value="saab">Mới</option>
                <option value="opel">Còn thời hạn</option>
                <option value="opel">Hết hạn</option>
              </select>
            </div>

            <div className="query-box">
              <form className="sample-content">
                <input
                  type="text"
                  placeholder="Tên hợp đồng, số hợp đồng, người ủy quyền..."
                  name="search2"
                ></input>
                <span className="search-tool">
                  <FiSearch></FiSearch>
                </span>
              </form>
            </div>
          </div>

          <div className="document-content">
            <table className="contracts-table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Số hợp đồng</th>
                  <th>Tên hợp đồng</th>
                  <th>Người ủy quyền</th>
                  <th>Quyền sở hữu</th>
                  <th>Hiệu lực hợp đồng</th>
                  <th>Ngày tạo</th>
                  
                </tr>
              </thead>
              <tbody>
                {contractDataSample.map((contract, index) => (
                  <tr key={contract.id}>
                    <td>{index + 1}</td>
                    <td>{contract.contractNumber}</td>
                    <td>{contract.contractName}</td>
                    <td>{contract.authorizedPerson}</td>
                    <td>{contract.ownership}</td>
                    <td>{contract.contractStatus}</td>
                    <td>{contract.creationDate}</td>
                    <td>
                      
                      <div className="xem-chi-tiet">Xem chi tiết</div>
                    
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>  
        </div>

        <div className="menu-container">
          <Link to="/them-hd-uq2" className="sub-menu">
            <VscAdd className="icon-menu"></VscAdd>
            <span className="span-menu">Thêm hợp đồng</span>
          </Link>
        </div>

        <MenuBar />
      </>
    );
}

export default DSHopDong;