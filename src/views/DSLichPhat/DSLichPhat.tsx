import React from "react";
import "./DSLichPhat.css";
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { FiEdit } from "react-icons/fi";
import { RiPlayListAddFill } from "react-icons/ri";

const DSLichPhat = () => {
  const scheduleList = [
    { id: 1, name: "Lịch phát số 1", time: "22/05/2021 - 30/05/2021" },
    { id: 2, name: "Lịch phát số 2", time: "01/06/2021 - 07/06/2021" },
    { id: 3, name: "Lịch phát số 3", time: "08/06/2021 - 14/06/2021" },
    { id: 4, name: "Lịch phát số 4", time: "15/06/2021 - 21/06/2021" },
    { id: 5, name: "Lịch phát số 5", time: "23/06/2021 - 29/06/2021" },
    { id: 6, name: "Lịch phát số 6", time: "1/02/2021 - 10/07/2021" },
    { id: 7, name: "Lịch phát số 7", time: "12/07/2021 - 20/07/2021" },
    { id: 8, name: "Lịch phát số 8", time: "23/07/2021 - 30/07/2021" },
  ];

  return (
    <>
      <div className="show-list-container">
        <Language />

        <div>
          <h3 className="title_lp">Danh sách lịch phát</h3>
        </div>
        <table className="program-listing">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên lịch</th>
              <th>Thời gian phát</th>
              <th colSpan={2}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {scheduleList.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.time}</td>
                <td className="show">Xem chi tiết</td>
                <td className="delete">Xóa</td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
      <div className="menu-container">
        <div className="sub-menu">
          <RiPlayListAddFill className="icon-menu"></RiPlayListAddFill>
          <span className="span-menu">Thêm lịch phát</span>
        </div>
      </div>

      <MenuBar />
    </>
  );
};

export default DSLichPhat;