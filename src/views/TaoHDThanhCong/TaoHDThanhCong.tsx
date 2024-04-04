import React from "react";
import './TaoHDThanhCong.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";

import { AiFillCheckCircle } from "react-icons/ai";

const TaoHDThanhCong = () => {
    return (
      <>
        <div className="kbg-container-form">
          <Language />
          <div>
            <h3>Thêm thông tin bản ghi</h3>
          </div>
        </div>

        <div className="holder">
          <div className="block-1">
            <div className="icon-v">
              <AiFillCheckCircle></AiFillCheckCircle>
            </div>
            <div className="label-1">
              <label>Hợp đồng đã được tạo thành công</label>
            </div>
          </div>

          <div>
            <hr />
          </div>

          <div>
            <div className="sta">
              <label>Có 2 cách để tạo bản ghi:</label>
            </div>

            <div className="content">
              <div className="con-1">
                <div className="lb">
                  <label>Cách 1:</label>
                </div>

                <div className="cont-1">
                  <label className="tag-1">Upload bản ghi trực tiếp</label>
                  <label className="tag-2">
                    Bạn có thể thực hiện thêm bản ghi ngay trên website
                  </label>
                  <input
                    className="btn"
                    type="button"
                    value="Thêm bản ghi trực tiếp"
                  />
                </div>
              </div>

              <div className="con-2">
                <div>
                  <label className="lb">Cách 2:</label>
                </div>

                <div className="cont-1">
                  <label className="tag-1">Upload bản ghi qua phần mềm</label>
                  <label className="tag-2">
                    Bạn có thể thêm bản ghi bằng tool
                  </label>
                  <input
                    className="btn-2"
                    type="button"
                    value="Thêm bản ghi bằng tool"
                  />
                </div>
              </div>
            </div>

            <div className="end">
              <a>
                Lưu ý: Hợp đồng chỉ có hiệu lực khi thêm bản ghi thành công.
              </a>
            </div>
          </div>
        </div>
      </>
    );
}

export default TaoHDThanhCong;