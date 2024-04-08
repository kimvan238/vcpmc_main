import React, { ChangeEvent, useState } from "react";
import "./ThemHDUQ2.css";
import logo2 from "../../assets/images/vn.jpg";
import eng from "../../assets/images/eng.jpg";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { SlCloudUpload } from "react-icons/sl";
import { AiOutlineFileWord, AiOutlineFilePdf } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const ThemHDUQ2 = () => {
  const navigate = useNavigate();
  const handleCancelClick = () => {
    navigate("/ds-hop-dong"); // This will navigate to the 'ds-hop-dong' route
  };

  const handleCreate = () => {
    // Chuyển hướng đến trang tạo hợp đồng thành công
    navigate("/tao-hd-thanh-cong");
  };
  const [entityType, setEntityType] = useState("personal");

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEntityType(event.target.value);
  };
  return (
    <>
      <div className="action-container">
        <Language />

        <div className="topic-heading">
          <h3>Thêm hợp đồng ủy quyền mới</h3>
        </div>

        <div className="full-container">
          <div className="box-container">
            <div className="box-1">
              <div className="topic-label">
                <label className="topic-label">Số hợp đồng: </label>
                <input className="input-z" type="text"></input>
              </div>

              <div className="topic-label">
                <label>Tên hợp đồng: </label>
                <input className="input-z" type="text"></input>
              </div>

              <div className="topic-label">
                <label className="topic-label">Ngày hiệu lực: </label>
                <input className="date-field-control" type="date"></input>
              </div>

              <div className="topic-label">
                <label className="topic-label">Ngày hết hạn: </label>
                <input className="date-field-control" type="date"></input>
              </div>
            </div>

            <div className="box-2">
              <div>
                <label>Đính kèm tệp:</label>
              </div>

              <div className="box-file-2">
                <button className="box-2-btn">
                  {" "}
                  <SlCloudUpload className="box-2-icon"></SlCloudUpload> Tải lên
                </button>
              </div>
            </div>

            <div className="box-3">
              <div className="box-file-1">
                <label className="box-label">
                  <RiErrorWarningLine className="box-2-icon-3"></RiErrorWarningLine>
                  Mức nhuận bút
                </label>
                <label className="box-label-2">Quyền tác giả:</label>
                <label className="box-label-3">Quyền liên quan:</label>
                <label className="box-2-label">
                  Quyền của người biểu diễn:
                </label>
                <label className="box-2-label">Quyền của nhà sản xuất:</label>
                <label className="box-2-label">(Bản ghi/video)</label>
              </div>

              <div className="box-file-3">
                <br></br>
                <label className="box-2-label">0%</label>
                <br></br>

                <div>
                  <br></br>
                  <label className="box-2-label">50%</label>
                </div>

                <div>
                  <label className="box-2-label">50%</label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <hr />
          </div>

          <div className="box-container-3">
            <div className="box-4">
              <div className="contract-label">
                <label className="contract-label">
                  Thông tin pháp nhân ủy quyền
                </label>
              </div>
            </div>
          </div>

          <div className="box-container-2">
            <div className="box-4">
              <div className="topic-label">
                <label className="topic-label">Pháp nhân ủy quyền: </label>
                <input
                  type="radio"
                  name="entityType"
                  value="personal"
                  checked={entityType === "personal"}
                  onChange={handleRadioChange}
                />{" "}
                Cá nhân
                <input
                  type="radio"
                  name="entityType"
                  value="organization"
                  checked={entityType === "organization"}
                  onChange={handleRadioChange}
                />{" "}
                Tổ chức
              </div>

              <div className="topic-label">
                <label>Tên người ủy quyền : </label>
                <input className="input-7" type="text"></input>
              </div>

              <div className="topic-label">
                <label className="topic-label">Giới tính: </label>
                {/* <input className="radio" type="radio"></input>Cá nhân
                                <input className="radio" type="radio"></input>Tổ chức */}
              </div>

              <div className="topic-label">
                <label>Ngày sinh: </label>
                <input className="input-date-4" type="date"></input>
              </div>

              <div className="topic-label">
                <label className="topic-label">Quốc tịch: </label>
                <select className="filter-menu-2">
                  <option className="option-2">Việt Nam</option>
                  <option className="option-2">England</option>
                </select>
              </div>

              <div className="topic-label">
                <label className="topic-label">Số điện thoại: </label>
                <input className="input-secondary" type="text"></input>
              </div>
            </div>

            <div className="box-5">
              <div className="lb-2">
                <label className="topic-label">CMND/CCCD: </label>
                <input className="input-secondary" type="text"></input>
              </div>

              <div className="topic-label">
                <label>Ngày cấp: </label>
                <input className="input-date-4" type="date"></input>
              </div>

              <div className="lb-2">
                <label className="topic-label">Nơi cấp: </label>
                <input className="input-two" type="text"></input>
              </div>

              <div className="lb-2">
                <label className="topic-label">Mã số thuế: </label>
                <input className="input-7" type="text"></input>
              </div>

              <div className="lb-2">
                <label className="topic-label">Nơi cư trú: </label>
                <input className="input-4" type="text"></input>
              </div>
            </div>

            <div className="box-6">
              <div className="lb-3">
                <label className="topic-label">Email: </label>
                <input className="input-two" type="text"></input>
              </div>

              <div className="lb-3">
                <label>Tên đăng nhập: </label>
                <input className="input-two" type="text"></input>
              </div>

              <div className="lb-3">
                <label className="topic-label">Mật khẩu: </label>
                <input className="input-two" type="password"></input>
              </div>

              <div className="lb-3">
                <label className="topic-label">Số tài khoản: </label>
                <input className="input-7" type="text"></input>
              </div>

              <div className="lb-3">
                <label className="topic-label">Ngân hàng: </label>
                <input className="input-7" type="text"></input>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="btn-box">
        <div className="btn-infor">
          <input
            className="btn-1"
            type="button"
            value="Hủy"
            onClick={handleCancelClick}
          />
          <input
            className="btn-2"
            type="button"
            value="Tạo"
            onClick={handleCreate}
          />
        </div>
      </div>
    </>
  );
};

export default ThemHDUQ2;
