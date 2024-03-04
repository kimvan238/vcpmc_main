import React from "react";
import './DsUyQuyen.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { FiEdit } from "react-icons/fi";
import { VscAdd } from "react-icons/vsc";

const DsUyQuyen = () => {
    return (
        <>

            <div className="kbg-container">
                <Language />

                <div>
                    <h3>Danh sách đối tác ủy quyền</h3>
                </div>

                <div className="kbg-content">
                    <div className="search-ctn">
                        <form className="example">
                            <input type="text" placeholder="Họ tên, tên đăng nhập, email..." name="search2"></input>
                            <span className="icon-search"><FiSearch></FiSearch></span>
                        </form>
                    </div>
                </div>

                <div className="kbg-nd">

                </div>
            </div>

            <MenuBar />
        </>
    )
}

export default DsUyQuyen;