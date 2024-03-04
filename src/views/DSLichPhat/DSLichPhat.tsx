import React from "react";
import './DSLichPhat.css';
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
    return (
        <>
            <div className="kbg-container">
                <Language />

                <div>
                    <h3>Danh sách lịch phát</h3>
                </div>

                <div className="kbg-nd">

                </div>
            </div>
            <div className="menu-container">
                <div className="sub-menu">
                    <RiPlayListAddFill className="icon-menu"></RiPlayListAddFill>
                    <span className="span-menu">Thêm lịch phát</span>
                </div>
            </div>

            <MenuBar />
        </>
    )
}

export default DSLichPhat;