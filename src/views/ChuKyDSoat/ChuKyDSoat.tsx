import React, { useState } from "react";
import "./ChuKyDSoat.css";
import logo2 from "../../assets/images/vn.jpg";
import eng from "../../assets/images/eng.jpg";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";

const ChuKyDSoat = () => {
  const [auditCycle, setAuditCycle] = useState("quarterly"); // default to 'quarterly' or 'monthly'
 const handleAuditCycleChange = (cycle: "quarterly" | "monthly") => {
   setAuditCycle(cycle);
 };

  const notify = () => toast.success("Lưu cài đặt chu kỳ đối soát thành công");
  return (
    <>
      <div className="kbg-container">
        <Language />

        <div>
          <h3>Cài đặt hệ thống</h3>
        </div>

        <div className="kbg-nd">
          <div>
            <h5>Cài đặt chu kỳ đối soát</h5>
          </div>

          <div className="input-radio">
            <input
              type="radio"
              name="radio-cycle"
              checked={auditCycle === "quarterly"}
              onChange={() => handleAuditCycleChange("quarterly")}
            />
            <label className="signature-container">Đối soát theo quý</label>
            {auditCycle === "quarterly" && (
              <div className="nd-con">
                <div className="nd-1">
                  <h5>Quý 1: </h5>
                  <a className="a-radio"> 01/06 - 30/07</a>
                </div>
                <div className="nd-1">
                  <h5>Quý 2: </h5>
                  <a className="a-radio"> 01/06 - 30/07</a>
                </div>
                <div className="nd-1">
                  <h5>Quý 3: </h5>
                  <a className="a-radio"> 01/06 - 30/07</a>
                </div>
                <div className="nd-1">
                  <h5>Quý 4: </h5>
                  <a className="a-radio"> 01/06 - 30/07</a>
                </div>
              </div>
            )}
          </div>

          <div className="input-radio">
            <input
              type="radio"
              name="radio-cycle"
              checked={auditCycle === "monthly"}
              onChange={() => handleAuditCycleChange("monthly")}
            />
            <label className="signature-container">Đối soát theo tháng</label>
            {auditCycle === "monthly" && (
              <div className="signing-field">
                <div className="signature-option">
                  <a className="endorsement-section">Ngày bắt đầu: </a>
                  <input
                    className="signature-date"
                    type="date"
                    name="date"
                  ></input>
                </div>

                <div className="signature-option">
                  <a className="kbg-a-2">Ngày kết thúc: </a>
                  <input
                    className="signature-date"
                    type="date"
                    name="date"
                  ></input>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="btn-infor">
            <input
              className="btn-2"
              type="button"
              value="Lưu"
              onClick={notify}
            />
          </div>
        </div>
      </div>

      <MenuBar />
    </>
  );
};

export default ChuKyDSoat;
