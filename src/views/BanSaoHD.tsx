import React from "react";
import './BanSaoHD.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";

import { SlCloudUpload } from "react-icons/sl";
import { AiOutlineFileWord, AiOutlineFilePdf } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";

const BanSaoHD = () => {
    return (
        <>

            <div className="kbg-container">
                <Language />

                <div className="h3">
                    <h3>Bản sao hợp đồng khai thác - </h3>
                </div>

                <div className="full-container">
                    <div className="box-container">
                        <div className="box-1">
                            <div className="lb-1">
                                <label className="lb-1">Tên hợp đồng: </label>
                                <input className="input-z" type="text"></input>
                            </div>

                            <div className="lb-1">
                                <label>Số hợp đồng: </label>
                                <input className="input-z" type="text"></input>
                            </div>


                            <div className="lb-1">
                                <label className="lb-1">Ngày hiệu lực: </label>
                                <input className="input-date-z" type="date"></input>
                            </div>

                            <div className="lb-1">
                                <label className="lb-1">Ngày hết hạn: </label>
                                <input className="input-date-z" type="date"></input>
                            </div>
                        </div>

                        <div className="box-2">
                            <div>
                                <label>Đính kèm tệp:</label>
                            </div>

                            <div className="box-file-2">
                                <button className="box-2-btn"> <SlCloudUpload className="box-2-icon"></SlCloudUpload> Tải lên</button>

                                <div>
                                    <label className="box-2-label"><AiOutlineFileWord className="box-2-icon-2"></AiOutlineFileWord>ngumotminh.doc</label>
                                </div>

                                <div>
                                    <label className="box-2-label"><AiOutlineFilePdf className="box-2-icon-2"></AiOutlineFilePdf>muonroimasaocon.doc</label>
                                </div>
                            </div>
                        </div>

                        <div className="box-3">
                            <div className="box-file-1">
                                <label className="box-label-2">Loại hợp đồng:</label>

                                <div className="box-radio">
                                    <div>
                                        <input type="radio"></input>
                                        <label>Trọn gói</label>
                                    </div>
                                    <div>
                                        <input type="radio"></input>
                                        <label>Lượt phát</label>
                                    </div>
                                </div>

                                <div></div>
                            </div>
                        </div>
                    </div>

                    <div className="box-container-2">
                        <div className="box-4">
                            <div className="lb-1">
                                <label>Tên đơn vị sử dụng: </label>
                                <input className="input-7" type="text"></input>
                            </div>

                            <div className="lb-1">
                                <label>Người đại diện: </label>
                                <input className="input-7" type="text"></input>
                            </div>


                            <div className="lb-1">
                                <label className="lb-1">Chức vụ: </label>
                                <input className="input-10" type="text"></input>
                            </div>

                            <div className="lb-1">
                                <label>Ngày sinh: </label>
                                <input className="input-date-5" type="date"></input>
                            </div>

                            <div className="lb-1">
                                <label className="lb-1">Quốc tịch: </label>
                                <select className="kbg-slt-2">
                                    <option className="option-2">Việt Nam</option>
                                </select>
                            </div>

                            <div className="lb-1">
                                <label className="lb-1">Số điện thoại: </label>
                                <input className="input-7" type="text"></input>
                            </div>

                            <div className="lb-1">
                                <label className="lb-1">Email: </label>
                                <input className="input-7" type="text"></input>
                            </div>
                        </div>

                        <div className="box-5">
                            <div className="lb-1">
                                <label className="lb-1">Giới tính: </label>
                            </div>

                            <div className="lb-1">
                                <label className="lb-1">CMND/ CCCD: </label>
                                <input className="input-2" type="text"></input>
                            </div>

                            <div className="lb-1">
                                <label>Ngày cấp: </label>
                                <input className="input-date-4" type="date"></input>
                            </div>

                            <div className="lb-1">
                                <label className="lb-1">Nơi cấp: </label>
                                <input className="input-2" type="text"></input>
                            </div>

                            <div className="lb-1">
                                <label className="lb-1">Mã số thuế: </label>
                                <input className="input-2" type="text"></input>
                            </div>

                            <div className="lb-3">
                                <label className="lb-1">Nơi cư trú: </label>
                                <input className="input-4" type="text"></input>
                            </div>
                        </div>

                        <div className="box-6">
                            <div className="lb-2">
                                <label>Tên đăng nhập: </label>
                                <input className="input-2" type="text"></input>
                            </div>


                            <div className="lb-2">
                                <label className="lb-1">Mật khẩu: </label>
                                <input className="input-2" type="password"></input>
                            </div>

                            <div className="lb-2">
                                <label className="lb-1">Số tài khoản: </label>
                                <input className="input-2" type="text"></input>
                            </div>

                            <div className="lb-2">
                                <label className="lb-1">Ngân hàng: </label>
                                <input className="input-2" type="text"></input>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div className="btn-box">
                <div className="btn-infor">
                    <input className="btn-1" type="button" value="Hủy" />
                    <input className="btn-2" type="button" value="Lưu" />
                </div>
            </div>

        </>
    )
}

export default BanSaoHD;