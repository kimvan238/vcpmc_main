import React from "react";
import './AddPlaylist.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { RiPlayListAddFill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

const AddPlaylist = () => {
    return (
      <>
        <div className="kbg-container">
          <Language />

          <div>
            <h3 className="h3">Thêm Playlist</h3>
          </div>

          <div className="kbg-nd"></div>

          <div className="ctent-2">
            <label className="lbl-2">* </label>
            <label>là những trường thông tin bắt buộc</label>
          </div>

          <div className="btn-box">
            <div className="btn-infor">
              <input className="btn-1" type="button" value="Hủy" />
              <input className="btn-2" type="button" value="Tạo" />
            </div>
          </div>
        </div>

        <div className="menu-container">
          <Link to="/them-ban-ghi" className="sub-menu">
            <IoMdAdd className="icon-menu" />
            <span className="span-menu">Thêm bản ghi</span>
          </Link>
        </div>
      </>
    );
}

export default AddPlaylist;