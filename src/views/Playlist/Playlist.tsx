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
    // Your playlist data here
    {
      id: 1,
      title: "Top ca khúc 2021",
      recordCount: 20,
      duration: "01:04:27",
      categories: ["Pop", "Chill", "Dingga", "Songs", "Lofi"],
      creationDate: "22/10/2020",
      creator: "Cindy Cường",
    },
    // ...other playlist items
  ];
  return (
    <>
      <div className="kbg-container">
        <Language />

        <div>
          <h3 className="text">Playlist</h3>
        </div>

        <div className="kbg-content">
          <div className="search-ctn">
            <form className="search-form" action="/action_page.php">
              <input
                type="text"
                placeholder="Tên chủ đề, người tạo,... "
                name="search2"
              ></input>
              <span className="icon-search-1">
                <FiSearch></FiSearch>
              </span>
            </form>
          </div>

          <div className="kbg-icons">
            <div id="icon1">
              <AiOutlineUnorderedList></AiOutlineUnorderedList>
            </div>

            <div id="icon2">
              <AiOutlineAppstore></AiOutlineAppstore>
            </div>
          </div>
<<<<<<< HEAD
        </div>

        <div className="kbg-nd">
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
                    <a href="#">Chi tiết</a>
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
            <span className="span-menu">Thêm playlist</span>
          </Link>
=======
>>>>>>> 35f55edde1dde69ef075d3accd006ee9f7ccd073
        </div>
      </div>

<<<<<<< HEAD
=======
       <div className="kbg-nd">
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
                  <td>{item.categories.join(' | ')}</td>
                  <td>{item.creationDate}</td>
                  <td>{item.creator}</td>
                  <td><a href="#">Chi tiết</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="menu-container">
        <div className="sub-menu">
          <RiPlayListAddFill className="icon-menu"></RiPlayListAddFill>
          <span className="span-menu">Thêm playlist</span>
        </div>
      </div>

>>>>>>> 35f55edde1dde69ef075d3accd006ee9f7ccd073
      <MenuBar />
    </>
  );
};
export default Playlist;
