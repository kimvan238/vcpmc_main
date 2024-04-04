import React from "react";
import "./Playlist.css";
import logo2 from "../../assets/images/vn.jpg";
import eng from "../../assets/images/eng.jpg";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { RiPlayListAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";

type PlaylistItem = {
  id: number;
  title: string;
  recordCount: number;
  duration: string;
  categories: string[];
  creationDate: string;
  creator: string;
};
const Playlist = () => {
  const data: PlaylistItem[] = [
    
    {
      id: 1,
      title: "Top ca khúc 2021",
      recordCount: 20,
      duration: "01:04:27",
      categories: ["Pop", "Chill", "Dingga", "Songs", "Lofi"],
      creationDate: "22/10/2020",
      creator: "Cindy Cường",
    },
    {
      id: 2,
      title: "Top USUK 2020",
      recordCount: 10,
      duration: "01:16:18",
      categories: ["Pop", "Chill", "Trending", "Songs", "Lofi"],
      creationDate: "22/10/2020",
      creator: "Grady Phùng",
    },
    {
      id: 3,
      title: "Top EDM",
      recordCount: 30,
      duration: "56:21",
      categories: ["Pop", "Chill", "Trending", "Songs", "Lofi"],
      creationDate: "22/10/2020",
      creator: "Viola Khang",
    },
    {
      id: 4,
      title: "Top USUK",
      recordCount: 30,
      duration: "02:05:02",
      categories: ["Pop", "Chill", "Trending", "Songs", "Lofi"],
      creationDate: "22/10/2020",
      creator: "Rene Hiến",
    },
    {
      id: 5,
      title: "Top Korea 2021",
      recordCount: 10,
      duration: "02:02:21",
      categories: ["Pop", "Chill", "Trending", "Songs", "Lofi"],
      creationDate: "22/10/2020",
      creator: "Yvette Đỗ",
    },
    {
      id: 6,
      title: "Top Vpop 2021",
      recordCount: 12,
      duration: "01:05:01",
      categories: ["Pop", "Chill", "Trending", "Songs", "Lofi"],
      creationDate: "22/10/2020",
      creator: "Cedric Hoàng",
    },
    {
      id: 7,
      title: "Top nhạc Hòa lời Việt",
      recordCount: 43,
      duration: "01:03:00",
      categories: ["Pop", "Chill", "Trending", "Songs", "Lofi"],
      creationDate: "22/10/2020",
      creator: "Noel Dung",
    },
    {
      id: 8,
      title: "Top play 2020",
      recordCount: 23,
      duration: "01:04:00",
      categories: ["Pop", "Chill", "Trending", "Songs", "Lofi"],
      creationDate: "22/10/2020",
      creator: "Adrienne Nhung",
    },
    {
      id: 9,
      title: "Top nhạc Hòa lời Việt 2020",
      recordCount: 22,
      duration: "01:02:32",
      categories: ["Pop", "Chill", "Trending", "Songs", "Lofi"],
      creationDate: "22/10/2020",
      creator: "Adrienne Lư",
    },
    {
      id: 10,
      title: "Ái rồi cũng phải dolce thôi",
      recordCount: 35,
      duration: "01:05:01",
      categories: ["Pop", "Chill", "Trending", "Songs", "Lofi"],
      creationDate: "22/10/2020",
      creator: "Yvette Hồ",
    },
    {
      id: 11,
      title: "Talking to the moon",
      recordCount: 14,
      duration: "01:03:31",
      categories: ["Pop", "Chill", "Trending", "Songs", "Lofi"],
      creationDate: "22/10/2020",
      creator: "Rene Đặng",
    },
    {
      id: 12,
      title: "Old town road",
      recordCount: 14,
      duration: "01:05:12",
      categories: ["Pop", "Chill", "Trending", "Songs", "Lofi"],
      creationDate: "22/10/2020",
      creator: "Nicolas Huỳnh",
    },
  ];
  return (
    <>
      <div className="kbg-containe">
        <Language />

        <div>
          <h3 className="tieu-de">Playlist</h3>
        </div>

        <div className="kbg-content">
          <div className="search-ctn">
            <form className="search-form" action="/action_page.php">
              <input
                type="text"
                placeholder="Tên chủ đề, người tạo,... "
                name="search2"
              ></input>
            </form>
          </div>

          <div className="kbg-icon">
            <div id="icon1">
              <AiOutlineUnorderedList></AiOutlineUnorderedList>
            </div>

            <div id="icon2">
              <AiOutlineAppstore></AiOutlineAppstore>
            </div>
          </div>
        </div>

        <div className="nd">
          {/* Bảng playlist ở đây */}
          <table className="playlist-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tiêu đề</th>
                <th>Số bản ghi</th>
                <th>Thời lượng</th>
                <th>Chủ đề</th>
                <th>Ngày tạo</th>
                <th>Người tạo</th>
                <th>Chi tiết</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.recordCount}</td>
                  <td>{item.duration}</td>
                  <td>{item.categories.join(" | ")}</td>
                  <td>{item.creationDate}</td>
                  <td>{item.creator}</td>
                  <td>
                    <a href="#" className="detail-link">
                      Chi tiết
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="menu-container">
        <div className="sub-menu">
          <Link to="/add-playlist" className="icon-menu">
            <RiPlayListAddFill></RiPlayListAddFill>
            <span className="menu">Thêm playlist</span>
          </Link>
        </div>
      </div>

      <MenuBar />
    </>
  );
};
export default Playlist;
