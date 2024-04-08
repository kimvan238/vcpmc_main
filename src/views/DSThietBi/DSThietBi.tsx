import React from "react";
import './DSThietBi.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { VscAdd } from "react-icons/vsc";
import { FiLock, FiTrash2, FiPower } from "react-icons/fi";

const DSThietBi = () => {
  // Sample dat
  const devices = [
    {
      id: "Device A12321",
      name: "Đang kích hoạt | Đang hoạt động",
      status: "active", // Assuming 'active' means 'Đang kích hoạt | Đang hoạt động'
      location: "86/33, Au Co, Phường 9, Tan Binh, TP Ho Chi Minh",
      contractEnd: "21/04/2021",
      mac: "123.125.16.10",
      memory: "0.00GB/32GB",
    },
    {
      id: "Device A12321",
      name: "Đang kích hoạt | Đang hoạt động",
      status: "active",
      location: "86/33, Au Co, Phường 9, Tan Binh, TP Ho Chi Minh",
      contractEnd: "21/04/2021",
      mac: "123.125.16.10",
      memory: "0.00GB/32GB",
    },
    // ... existing devices
    // Additional devices
    {
      id: "Device A12322",
      name: "Ngừng kích hoạt",
      status: "inactive",
      location: "85/33, Au Co, Phường 9, Tan Binh, TP Ho Chi Minh",
      contractEnd: "21/05/2021",
      mac: "123.125.16.11",
      memory: "0.00GB/32GB",
    },
    // Replicate the following structure for the remaining devices
    {
      id: "Device A12323",
      name: "Đang bị khóa",
      status: "locked",
      location: "84/33, Au Co, Phường 9, Tan Binh, TP Ho Chi Minh",
      contractEnd: "22/04/2021",
      mac: "123.125.16.12",
      memory: "0.00GB/32GB",
    },
    // ... (repeat this structure and update the fields as necessary)
    // The last device for the example
    {
      id: "Device A12334",
      name: "Đang kích hoạt | Đang hoạt động",
      status: "active",
      location: "73/33, Au Co, Phường 9, Tan Binh, TP Ho Chi Minh",
      contractEnd: "30/04/2021",
      mac: "123.125.16.21",
      memory: "0.00GB/32GB",
    },
    // ... previous devices
    {
      id: "Device A12335",
      name: "Đang kích hoạt | Đang hoạt động",
      status: "active",
      location: "74/33, Au Co, Phường 9, Tan Binh, TP Ho Chi Minh",
      contractEnd: "01/05/2021",
      mac: "123.125.16.22",
      memory: "0.00GB/32GB",
    },
    {
      id: "Device A12336",
      name: "Ngừng kích hoạt",
      status: "inactive",
      location: "75/33, Au Co, Phường 9, Tan Binh, TP Ho Chi Minh",
      contractEnd: "02/05/2021",
      mac: "123.125.16.23",
      memory: "0.00GB/32GB",
    },
    {
      id: "Device A12337",
      name: "Đang bị khóa",
      status: "locked",
      location: "76/33, Au Co, Phường 9, Tan Binh, TP Ho Chi Minh",
      contractEnd: "03/05/2021",
      mac: "123.125.16.24",
      memory: "0.00GB/32GB",
    },
    {
      id: "Device A12338",
      name: "Đang kích hoạt | Đang hoạt động",
      status: "active",
      location: "77/33, Au Co, Phường 9, Tan Binh, TP Ho Chi Minh",
      contractEnd: "04/05/2021",
      mac: "123.125.16.25",
      memory: "0.00GB/32GB",
    },
    
    {
      id: "Device A12345",
      name: "Ngừng kích hoạt",
      status: "inactive",
      location: "85/33, Au Co, Phường 9, Tan Binh, TP Ho Chi Minh",
      contractEnd: "12/05/2021",
      mac: "123.125.16.32",
      memory: "0.00GB/32GB",
    },
    {
      id: "Device A12346",
      name: "Đang bị khóa",
      status: "locked",
      location: "86/33, Au Co, Phường 9, Tan Binh, TP Ho Chi Minh",
      contractEnd: "13/05/2021",
      mac: "123.125.16.33",
      memory: "0.00GB/32GB",
    },
  ];
  return (
    <>
      <div className="device-box">
        <Language />
        <div>
          <h3>Danh sách thiết bị</h3>
        </div>

        <div className="kbg-content">
          <div className="kbg-option">
            <select className="kbg-slt1" name="cars" id="cars">
              <option value="volvo">Tất cả</option>
              <option value="saab">Công ty TMCP Bách Hóa Xanh</option>
              <option value="opel">Công ty TNHH XYZ</option>
              <option value="audi">Công ty TMCP Adora</option>
            </select>
          </div>

          <div className="kbg-option">
            <select className="kbg-slt2" name="cars" id="cars">
              <option value="volvo">Tất cả</option>
              <option value="volvo">MAC Address</option>
              <option value="saab">Memory</option>
              <option value="opel">SKU/ID</option>
              <option value="volvo">Hạn bảo hành</option>
              <option value="saab">Tên đăng nhập</option>
              <option value="opel">Trạng thái</option>
              <option value="volvo">Địa điểm</option>
              <option value="saab">Hạn hợp đồng</option>
            </select>
          </div>

          <div className="search-ctn">
            <form className="sample">
              <input
                type="text"
                placeholder="Tìm thiết bị theo tên, SKU, địa điểm, địa chỉ Mac"
                name="search2"
              ></input>
              <span className="explorer-icon">
                <FiSearch></FiSearch>
              </span>
            </form>
          </div>
        </div>

        <div className="page-content">
          <table className="devices-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên thiết bị</th>
                <th>Trạng thái</th>
                <th>Địa điểm</th>
                <th>Hạn hợp đồng</th>
                <th>MAC Address</th>
                <th>Memory</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{device.id}</td>
                  <td>
                    <span className={`status-dot ${device.status}`}></span>
                    {device.name}
                  </td>
                  <td>{device.location}</td>
                  <td>{device.contractEnd}</td>
                  <td>{device.mac}</td>
                  <td>{device.memory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="menu-container">
        <div className="sub-menu">
          <VscAdd className="icon-menu"></VscAdd>
          <span className="span-menu">Thêm thiết bị</span>
        </div>

        <div className="sub-menu">
          <FiPower className="icon-menu"></FiPower>
          <span className="span-menu">Kích hoạt thiết bị</span>
        </div>

        <div className="sub-menu">
          <FiLock className="icon-menu"></FiLock>
          <span className="span-menu">Khóa thiết bị</span>
        </div>

        <div className="sub-menu">
          <FiTrash2 className="icon-menu"></FiTrash2>
          <span className="span-menu">
            Xóa<br></br> thiết bị
          </span>
        </div>
      </div>

      <MenuBar />
    </>
  );
}

export default DSThietBi;