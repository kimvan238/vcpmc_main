import React from "react";
import "./AddPlaylist.css"; // Đảm bảo rằng file CSS của bạn phản ánh các thay đổi này.
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
const AddPlaylist = () => {
  return (
    <div className="add-playlist-container">
      <div className="header">
        <div className="header-content">
          <h1 className="header-title">Thêm Playlist</h1>
          <Language />
        </div>
      </div>

      <div className="main-content">
        <div className="data-entry">
          <form className="add-playlist-form">
            {/* Anh bia */}
            <div className="form-group">
              <label htmlFor="coverImage">Ảnh bìa:</label>
              <button type="button" className="upload-btn">
                Tải lên
              </button>
            </div>

            {/* Tieu de */}
            <div className="form-group">
              <label htmlFor="playlistTitle">Tiêu đề: *</label>
              <input
                type="text"
                id="playlistTitle"
                name="playlistTitle"
                required
              />
            </div>

            {/* Tong so bai hat */}
            <div className="form-group">
              <label>Tổng số bài hát:</label>
              <span className="count-info">0 bản ghi</span>
            </div>

            {/* Tong thoi luong */}
            <div className="form-group">
              <label>Tổng thời lượng:</label>
              <span className="duration-info">--:--</span>
            </div>

            {/* Mo ta */}
            <div className="form-group">
              <label htmlFor="playlistDescription">Mô tả:</label>
              <textarea id="playlistDescription" name="playlistDescription" />
            </div>

            {/* Chu de */}
            <div className="form-group">
              <label htmlFor="playlistTheme">Chủ đề:</label>
              <input type="text" id="playlistTheme" name="playlistTheme" />
            </div>

            {/* Che do cong khai */}
            <div className="form-group">
              <label htmlFor="publicMode">Chế độ công khai:</label>
              <input type="checkbox" id="publicMode" name="publicMode" />
            </div>
          </form>
        </div>
        <div className="playlist-details">
          {/* Bảng chi tiết */}
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên bản ghi</th>
                  <th>Ca sĩ</th>
                  <th>Tác giả</th>
                </tr>
              </thead>
            </table>
          </div>

          {/* Gợi ý người dùng chọn bản ghi để thêm */}
          <p className="instruction">
            Vui lòng chọn bản ghi để thêm vào Playlist *
          </p>

          {/* Nút thêm bản ghi */}
          <Link to="/them-ban-ghi" className="add-record-button">
            <IoMdAdd className="add-record-icon" />
            <span>Thêm bản ghi</span>
          </Link>
        </div>
      </div>

      <div className="footer">
        <Link
          to="/playlist"
          className="btn cancel"
          style={{ textDecoration: "none" }}
        >
          Hủy
        </Link>
        <button className="btn save">Lưu</button>
      </div>
    </div>
  );
};

export default AddPlaylist;
