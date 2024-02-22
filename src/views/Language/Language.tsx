import React from "react";
import './Language.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";

const Language = () => {
    return (
        <div className="dropdown">
            <div className="dropbtn" >
                <a className="a-top">Tiếng Việt</a>
                <img src={logo2} className="logo2" />
            </div>
            <div className="dropdown-content">
                <div className="drop-title">
                    <a className="a-top">Tiếng Việt</a>
                    <img src={logo2} className="vn" />
                </div>
                <div className="drop-title">
                    <a className="a-top">English</a>
                    <img src={eng} className="eng" />
                </div>
            </div>
        </div>

    )
}

export default Language;