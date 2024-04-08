import React, { useState } from "react";
import "./Feedback.css";
import logo2 from "../../assets/images/vn.jpg";
import eng from "../../assets/images/eng.jpg";
import Language from "../Language/Language";
import MenuBar from "../MenuBar/MenuBar";

const Feedback = () => {
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleSubmit = () => {
    // Xử lý gửi feedback
    setFeedbackSent(true); // Hiển thị thông báo

    // Đặt một timeout để ẩn thông báo sau 3 giây
    setTimeout(() => {
      setFeedbackSent(false);
    }, 2000);
  };
  return (
    <>
      <div className="kbg-container">
        <Language />
        <div>
          <h3>Feedback</h3>
        </div>
      </div>

      <div className="feedback-section">
        <label className="label">Tên người dùng</label>
        <label className="name">Ng.Vân</label>
        <label className="label-2">Bạn muốn được hỗ trợ vấn đề gì?</label>

        <div className="kbg-option">
          <select className="feedback-picker">
            <option className="option">Tài khoản</option>
            <option className="option">Quản lý doanh thu</option>
            <option className="option">Bản quyền</option>
            <option className="option">Khác</option>
          </select>
        </div>
        <label className="label-2">Nội dung</label>
        <input
          className="feedback-input"
          type="text"
          placeholder="Nhập nội dung"
        ></input>
      </div>
      
      {feedbackSent && (
        <div className="feedback-confirmation">
          <span className="feedback-success-icon">✓</span>
          <span className="feedback-success-message">
            Gửi feedback thành công
          </span>
        </div>
      )}
      <input className="btn" type="button" value="Gửi" onClick={handleSubmit} />

      <MenuBar />
    </>
  );
};

export default Feedback;
