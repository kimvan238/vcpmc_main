import React from "react";
import './TTBanGhi.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { RiFolderMusicLine } from "react-icons/ri";

const TTBanGhi = () => {
    return (
        <>
            <div className="kbg-container">
                <Language />
                <div>
                    <h3>Bản Ghi - </h3>
                </div>
            </div>

            <div className="box">
                <div className="cont-1">
                    <div className="container-1">
                        <label className="lb-1">Thông tin bản ghi</label>

                        <div className="avt-container">
                            <div className="avt"></div>
                        </div>

                        <div className="icn">
                            <RiFolderMusicLine className="icon"></RiFolderMusicLine>
                            <label className="lb-name">Materm.mp3</label>
                        </div>

                        <div className="f-nd">
                            <div className="nd-1">
                                <label className="label-3">Ngày thêm:</label>
                                <label className="label-4">Người tải lên:</label>
                                <label className="label-4">Người duyệt:</label>
                                <br></br>
                                <label className="label-4">Ngày phê duyệt:</label>
                            </div>
                            <div className="nd-2">
                                <label className="label-5">07/04/2021 - 17:45:30</label>
                                <label className="label-4">Super Admin</label>
                                <label className="label-4">Hệ thống</label>
                                <label className="label-6">(Tự đồng phê duyệt)</label>
                                <label className="label-5">07/04/2021 - 17/45/50</label>
                            </div>
                        </div>
                    </div>

                    <div className="container-2">
                        <label className="lb-1">Thông tin ủy quyền</label>
                        <div className="f-nd-2">
                            <div className="nd-3">
                                <label className="label-3">Số hợp đồng:</label>
                                <label className="label-4">Ngày nhận bản quyền:</label>
                                <label className="label-4">Ngày hết hạn:</label>
                                <label className="label-4">Trạng thái:</label>
                            </div>
                            <div className="nd-4">
                                <label className="label-3">BH123</label>
                                <label className="label-4">01/05/2021</label>
                                <label className="label-4">01/08/2021</label>
                                <label className="label-5">Còn thời hạn</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cont-2">
                    <div className="container-3">
                        <label className="lb-1">Chỉnh sửa thông tin</label>
                        <label className="label-2">Tên bản ghi:</label>
                        <input className="input" type="text" />
                        <label className="label">Mã ISRC:</label>
                        <input className="input" type="text" />
                        <label className="label">Ca sĩ:</label>
                        <input className="input" type="text" />
                        <label className="label">Tác giả:</label>
                        <input className="input" type="text" />
                        <label className="label">Nhà sản xuất:</label>
                        <input className="input" type="text" />
                        <label className="label">Thể loại:</label>
                        <select className="kbg-slt-2">
                            <option className="option-2">Việt Nam</option>
                        </select>
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

export default TTBanGhi;