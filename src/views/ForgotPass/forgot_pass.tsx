import React from "react";
import "./forgot_pass.css";
import logo from "../../assets/images/vcpmc_logo.jpg";
import logo2 from "../../assets/images/vn.jpg";
import eng from "../../assets/images/eng.jpg";
import Language from "../Language/Language";
import { Link } from "react-router-dom";

const ForgotPass = () => {
  return (
    <>
      <Language />
      <div>
        <img src={logo} alt="VCPMC Logo" className="logo" />
      </div>
      <form className="login-container">
        <p>Khôi phục mật khẩu</p>
        <div className="title">
          Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu
        </div>
        <label htmlFor="email">Email</label>
        <input id="email" className="input-email" type="email" />
        {/* You can use a button inside a Link or style the Link directly */}
        <Link to="/reset-password-success" className="button" role="button">
          Xác nhận
        </Link>
      </form>
      <div className="back-login">
        <Link to="/">Quay lại đăng nhập</Link>
      </div>
    </>
  );
};

export default ForgotPass;
