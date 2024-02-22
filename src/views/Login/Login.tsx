import React, { ChangeEvent, FormEvent, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/images/vcpmc_logo.jpg";
import Language from "../Language/Language";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Sử dụng useNavigate

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(""); // Xóa thông báo lỗi khi người dùng bắt đầu nhập
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) {
      setErrorMessage("Hãy nhập tài khoản và mật khẩu");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Xử lý sau khi đăng nhập thành công
      navigate("/infor"); 
    } catch (error) {
      // Cập nhật thông báo lỗi tại đây
      setErrorMessage("Sai tên đăng nhập hoặc mật khẩu");
    }
  };

  const togglePasswordVisibility = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="login-container">
      <Language />
      <img src={logo} alt="Logo" className="logo" />
      <form onSubmit={handleSubmit}>
        <p>Đăng nhập</p>
        <div className="input-group">
          <label htmlFor="email">Tên đăng nhập</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={handleInputChange}
            className={`input ${errorMessage ? "input-error" : ""}`}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              id="password"
              name="password"
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={handleInputChange}
              className={`input ${errorMessage ? "input-error" : ""}`}
            />
            {password && (
              <span
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {isShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            )}
          </div>
        </div>

        {errorMessage && (
          <div className="login-message-error">{errorMessage}</div>
        )}
        <label className="container">
          Ghi nhớ đăng nhập
          <input type="checkbox" className="checkmark"></input>
          <span className="checkmark"></span>
        </label>
        <button type="submit" className="button">
          Đăng nhập
        </button>
      </form>
      <div className="forgot-password-link">
        <Link to="/forgot-password">Quên mật khẩu?</Link>
      </div>
    </div>
  );
};

export default Login;
