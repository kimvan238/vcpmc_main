import React from "react";
import './TTTacPham.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { FiEdit } from "react-icons/fi";

const TTTacPham = () => {
  const artworkInfo = [
    {
      STT: 1,
      genre: "Pop",
      description:
        "Nhạc pop là một thể loại của nhạc đương đại và rất phổ biến trong làng nhạc đại chúng.",
    },
    {
      STT: 2,
      genre: "Bolero",
      description:
        "Quay về với một thời hoa bướm đầy mộng mơ khi nghe các tuyệt phẩm nhạc bolero trữ tình này.",
    },
    {
      STT: 3,
      genre: "Ballad",
      description:
        "Ballad là dòng nhạc nhẹ nhàng, trữ tình bắt nguồn từ dòng nhạc country và folk với giai điệu chậm, thông tha.",
    },
    {
      STT: 4,
      genre: "Lofi",
      description:
        "Lo-fi là một thể loại nhạc trong đó có chứa các yếu tố không hoàn hảo trong quá trình ghi âm và trình diễn.",
    },
    {
      STT: 5,
      genre: "Blues",
      description:
        "Nhạc Blues có nguồn gốc từ nhiễng điệu hát của miền tây Phi Châu được các nô lệ da đen mang sang Bắc Mỹ.",
    },
    {
      STT: 6,
      genre: "Country",
      description:
        "'Nhạc đồng quê' là một thể loại nhạc pha trộn truyền thống được tìm thấy phổ biến ở Mỹ và Canada.",
    },
    {
      STT: 7,
      genre: "Jazz",
      description:
        "Jazz là một thể loại âm nhạc bắt nguồn từ cộng đồng người châu Phi ở Hoa Kỳ vào cuối thế kỷ 19 và đầu thế kỷ 20.",
    },
    {
      STT: 8,
      genre: "Rock",
      description:
        "Rock là một thể loại âm nhạc quần chúng được bắt nguồn từ cách gọi ngắn gọn của cụm từ 'rock and roll' vào những năm 1950 ở Mỹ.",
    },
    {
      STT: 9,
      genre: "Ballad",
      description:
        "Ballad là dòng nhạc nhẹ nhàng, trữ tình bắt nguồn từ dòng nhạc country và folk với giai điệu chậm, thông tha.",
    },
  ];

  // You would then map through this data to render your table rows in React

  return (
    <>
      <div className="kbg-container">
        <Language />

        <div>
          <h3>Thông tin tác phẩm</h3>
        </div>

        <div>
          <h5>Thể loại tác phẩm</h5>
        </div>

        <div className="artwork-info-container">
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên thể loại</th>
                <th>Mô tả</th>
              </tr>
            </thead>
            <tbody>
              {artworkInfo.map((info) => (
                <tr key={info.STT}>
                  <td>{info.STT}</td>
                  <td>{info.genre}</td>
                  <td>{info.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="menu-container">
        <div className="sub-menu">
          <FiEdit className="icon-menu"></FiEdit>
          <span className="span-menu">Chỉnh sửa</span>
        </div>
      </div>

      <MenuBar />
    </>
  );
}

export default TTTacPham;