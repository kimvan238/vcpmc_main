import React, { useState } from "react";
import "./KhoBanGhi.css";
import logo2 from "../../assets/images/vn.jpg";
import eng from "../../assets/images/eng.jpg";
import hinh1 from "../../assets/images/hinh1.jpg";
import hinh2 from "../../assets/images/hinh2.jpg";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { FiEdit } from "react-icons/fi";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const KhoBanGhi = () => {
  const [showVideoPlayer, setShowVideoPlayer] = React.useState(false);

  // Hàm để xử lý việc mở video player
  const handleImageClick = () => {
    setShowVideoPlayer(true);
  };

  // Hàm để đóng video player
  const handleCloseVideoPlayer = () => {
    setShowVideoPlayer(false);
  };

  const records = [
    // Mảng các đối tượng, mỗi đối tượng đại diện cho một bản ghi
    {
      id: 1,
      image: hinh1, // Đường dẫn tới hình ảnh
      title: "Handcrafted Fresh Bacon Multy",
      artist: "Bella Porch",
      composer: "Leilani Zuluaf",
      contract: "HD3957895803",
      genre: "Pop",
      format: "Audio",
      duration: "03:30",
      //   ...more_data
    },
    {
      id: 2,
      image: hinh1, // Đường dẫn tới hình ảnh
      title: "Handcrafted Fresh Bacon Multy",
      artist: "Bella Porch",
      composer: "Leilani Zuluaf",
      contract: "HD3957895803",
      genre: "Pop",
      format: "Audio",
      duration: "03:30",
      //   ...more_data
    },
    {
      id: 3,
      image: hinh1, // Đường dẫn tới hình ảnh
      title: "Handcrafted Fresh Bacon Multy",
      artist: "Bella Porch",
      composer: "Leilani Zuluaf",
      contract: "HD3957895803",
      genre: "Pop",
      format: "Audio",
      duration: "03:30",
      //   ...more_data
    },
    {
      id: 4,
      image: hinh1, // Đường dẫn tới hình ảnh
      title: "Handcrafted Fresh Bacon Multy",
      artist: "Bella Porch",
      composer: "Leilani Zuluaf",
      contract: "HD3957895803",
      genre: "Pop",
      format: "Audio",
      duration: "03:30",
      //   ...more_data
    },
    {
      id: 5,
      image: hinh1, // Đường dẫn tới hình ảnh
      title: "Handcrafted Fresh Bacon Multy",
      artist: "Bella Porch",
      composer: "Leilani Zuluaf",
      contract: "HD3957895803",
      genre: "Pop",
      format: "Audio",
      duration: "03:30",
      //   ...more_data
    },
    {
      id: 6,
      image: hinh1, // Đường dẫn tới hình ảnh
      title: "Handcrafted Fresh Bacon Multy",
      artist: "Bella Porch",
      composer: "Leilani Zuluaf",
      contract: "HD3957895803",
      genre: "Pop",
      format: "Audio",
      duration: "03:30",
      //   ...more_data
    },
    {
      id: 7,
      image: hinh1, // Đường dẫn tới hình ảnh
      title: "Handcrafted Fresh Bacon Multy",
      artist: "Bella Porch",
      composer: "Leilani Zuluaf",
      contract: "HD3957895803",
      genre: "Pop",
      format: "Audio",
      duration: "03:30",
      //   ...more_data
    },
    {
      id: 8,
      image: hinh1, // Đường dẫn tới hình ảnh
      title: "Handcrafted Fresh Bacon Multy",
      artist: "Bella Porch",
      composer: "Leilani Zuluaf",
      contract: "HD3957895803",
      genre: "Pop",
      format: "Audio",
      duration: "03:30",
      //   ...more_data
    },
    // ...more_records
  ];
  return (
    <>
      <div className="kbg-contain">
        <Language />

        <div>
          <h3>Kho bản ghi</h3>
        </div>

        <div className="search">
          <form className="example" action="/action_page.php">
            <input
              type="text"
              placeholder="Tên bản ghi, ca sĩ,... "
              name="search2"
            ></input>
            <span className="magnifier-icon">
              <FiSearch></FiSearch>
            </span>
          </form>
        </div>

        <div className="kbg-content">
          <div className="kbg-option">
            <a className="kbg-b">Thể loại: </a>
            <select className="slt" name="cars" id="cars">
              <option value="volvo">Tất cả</option>
              <option value="saab">POP</option>
              <option value="opel">EDM</option>
              <option value="audi">Ballad</option>
            </select>
          </div>

          <div className="kbg-option">
            <a className="kbg-b">Định dạng: </a>
            <select className="slt" name="cars" id="cars">
              <option value="volvo">Tất cả</option>
              <option value="saab">Âm thanh</option>
              <option value="opel">Video</option>
            </select>
          </div>

          <div className="kbg-option">
            <a className="kbg-b">Thời hạn sử dụng: </a>
            <select className="slt" name="cars" id="cars">
              <option value="volvo">Tất cả</option>
              <option value="saab">Còn thời hạn</option>
              <option value="opel">Hết hạn</option>
            </select>
          </div>

          <div className="kbg-option">
            <a className="kbg-b">Trạng thái: </a>
            <select className="slt" name="cars" id="cars">
              <option value="volvo">Tất cả</option>
              <option value="saab">Duyệt bởi người dùng</option>
              <option value="opel">Duyệt tự động</option>
            </select>
          </div>

          <div className="kbg-icons">
            <div id="icon1">
              <AiOutlineUnorderedList></AiOutlineUnorderedList>
            </div>

            <div id="icon2">
              <AiOutlineAppstore></AiOutlineAppstore>
            </div>
          </div>
        </div>

        <div className="bg-nd">
          {records.map((record) => (
            <div key={record.id} className="record-card">
              <div onClick={handleImageClick}>
                <img src={record.image} alt={record.title} />
              </div>
              <div className="record-info">
                <h3 className="record-title">{record.title}</h3>
                <p className="record-artist">Ca sĩ: {record.artist}</p>
                <p className="record-composer">Sáng tác: {record.composer}</p>
                <p className="record-contract">
                  Số hợp đồng: {record.contract}
                </p>
                <div className="record-footer">
                  <div className="tag-wrapper">
                    <span className="tag-label">Thể loại</span>
                    <span className="tag">Pop</span>
                  </div>
                  <div className="tag-wrapper">
                    <span className="tag-label">Định dạng</span>
                    <span className="tag">Audio</span>
                  </div>
                  <div className="tag-wrapper">
                    <span className="tag-label">Thời lượng</span>
                    <span className="tag">03:30</span>
                  </div>
                  <FiEdit className="edit-icon" />{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
        {showVideoPlayer && <VideoPlayer onClose={handleCloseVideoPlayer} />}
      </div>

      <div className="nav-container">
        <div className="sub-menu">
          <FiEdit className="icon-menu"></FiEdit>
          <span className="span-menu">Quản lý phê duyệt</span>
        </div>
      </div>
      <MenuBar />
    </>
  );
};

export default KhoBanGhi;
