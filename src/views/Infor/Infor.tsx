import React from "react";
import './Infor.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import MenuInfor from "../MenuInfor/MenuInfor";

const Infor = () => {
    return (
        <>
            <div className="infor-container">
                <Language />

                <div>
                    <h3>Thông tin cơ bản</h3>
                </div>

                <div className="avt-container">
                    <div className="avt-if"></div>
                    <a className="name-if">Nguyễn Vân</a>
                </div>

            </div>

            <div className="form-container">
                <form className="form-infor-container">
                    <div className="input-container">
                        <div className="input-infor">
                            <label className="label">Họ:</label>
                            <input className="input-2" type="text" />

                            <label>Ngày sinh:</label>
                            <input className="input-2" type="text" />
                        </div>

                        <div className="input-infor-2">
                            <label>Tên:</label>
                            <input className="input-2" type="text" />

                            <label>Số điện thoại:</label>
                            <input className="input-2" type="text" />
                        </div>
                    </div>
                    <label>Email:</label>
                    <input className="input" type="text" />

                    <label>Tên đăng nhập:</label>
                    <input className="input" type="text" />

                    <div>
                        <label>Phân quyền:</label>
                        <input className="input-3" type="text" />
                    </div>
                </form>
            </div>
            <MenuBar />
            <MenuInfor />
        </>
    )
}

export default Infor;