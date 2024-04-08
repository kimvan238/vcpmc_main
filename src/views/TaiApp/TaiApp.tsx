import React from "react";
import './TaiApp.css';
import logo2 from '../../assets/images/vn.jpg';
import eng from '../../assets/images/eng.jpg';
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";

import { FaCloudUploadAlt } from "react-icons/fa";
import { BsWindows } from "react-icons/bs";
import { GrAndroid } from "react-icons/gr";

const TaiApp = () => {
    return (
      <>
        <div className="kbg-container">
          <Language />
          <div>
            <h3>Tải App</h3>
          </div>
        </div>

        <div>
          <div className="app-download-box">
            <label className="step-1">ỨNG DỤNG </label>
            <label className="step-2">VCPMC</label>
            <br></br>
            <label className="step-3">
              - - - - - - - - - - - - - - - - - - - -
            </label>
            <br></br>
            <label className="step-5">Bạn vui lòng chọn</label>
            <br></br>
            <label className="step-4">nền tảng </label>
            <label className="step-6">phù hợp để trải nghiệm</label>
          </div>

          <div className="download">
            <div className="box">
              <FaCloudUploadAlt className="icon-1"></FaCloudUploadAlt>
              <input className="btn" type="button" value="Tool Upload" />
            </div>

            <div className="box">
              <BsWindows className="icon-2"></BsWindows>
              <input className="btn" type="button" value="Tải App Window" />
            </div>

            <div className="box">
              <GrAndroid className="icon-3"></GrAndroid>
              <input className="btn" type="button" value="Tải App Android" />
            </div>
          </div>
        </div>

        <MenuBar />
      </>
    );
}

export default TaiApp;