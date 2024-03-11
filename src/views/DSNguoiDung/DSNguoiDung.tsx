import React from "react";
import './DSNguoiDung.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { FiEdit } from "react-icons/fi";
import { TbFileExport } from "react-icons/tb";
import { FiUserPlus } from "react-icons/fi";

const DSNguoiDung = () => {
    return (
        <>

            <div className="kbg-container">
                <Language />

                <div>
                    <h3>Danh sách người dùng</h3>
                </div>

                <div className="kbg-content">
                    <div className="search-ctn">
                        <form className="example">
                            <input type="text" placeholder="Tên hợp đồng, số hợp đồng, người ủy quyền..." name="search2"></input>
                            <span className="icon-search"><FiSearch></FiSearch></span>
                        </form>
                    </div>
                </div>

                <div className="kbg-nd">

                </div>
            </div>

            <div className="menu-container">
                <div className="sub-menu">
                    <FiUserPlus className="icon-menu"></FiUserPlus>
                    <span className="span-menu">Thêm người dùng</span>
                </div>
            </div>

            <MenuBar />
        </>
    )
}

export default DSNguoiDung;