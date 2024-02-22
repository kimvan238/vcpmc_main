import React from "react";
import "./EditInfor.css";
import { useNavigate } from "react-router-dom";
import logo2 from "../../assets/images/vn.jpg";
import eng from "../../assets/images/eng.jpg";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineAppstore } from "react-icons/ai";
import Language from "../Language/Language";
import { ToastContainer, toast } from "react-toastify";
import MenuBar from "../MenuBar/MenuBar";

const EditInfor = () => {
   const navigate = useNavigate();
   
   const [redirectToInfor, setRedirectToInfor] = React.useState(false);

   React.useEffect(() => {
     if (redirectToInfor) {
       navigate("/infor");
     }
   }, [redirectToInfor, navigate]);

   const notifySuccessAndNavigate = () => {
     toast.success("Đổi mật khẩu thành công!", {
       position: "bottom-center",
       className: "custom-toast-success",
       autoClose: 8000, // Đặt thời gian tự đóng của toast là 8 giây
       onClose: () => navigate("/infor"), // Sử dụng hàm navigate để chuyển đến trang "/infor" sau khi toast đóng
     });
   };
  return (
    <>
      <div className="infor-container">
        <Language />

        <div>
          <h3>Thông tin cơ bản</h3>
        </div>

        <div className="avt-container">
          <div className="avt-if"></div>
          <a className="name-if">Name</a>
        </div>
      </div>

      <div className="form-container">
        <form className="form-infor-container">
          <div className="input-container">
            <div className="input-infor">
              <label className="label">Họ:</label>
              <input className="input-2" type="text" />

              <label>Ngày sinh:</label>
              <input className="input-2" type="date" />
            </div>

            <div className="input-infor-2">
              <label>Tên:</label>
              <input className="input-2" type="text" />

              <label>Số điện thoại:</label>
              <input className="input-2" type="text" />
            </div>
          </div>
          <label>Email:</label>
          <input className="input" type="email" />

          <label>Tên đăng nhập:</label>
          <input className="input" type="text" />

          <div>
            <label>Phân quyền:</label>
            <input className="input-3" type="text" />
          </div>

          <div className="btn-infor">
            <button className="btn-1" type="button">
              Hủy
            </button>
            <button
              className="btn-2"
              type="button"
              onClick={notifySuccessAndNavigate}
            >
              Lưu
            </button>
          </div>
        </form>
      </div>
      <MenuBar />
      <ToastContainer />
    </>
  );
};

export default EditInfor;
