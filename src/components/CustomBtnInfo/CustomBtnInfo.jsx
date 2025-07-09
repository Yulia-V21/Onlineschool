import CustomButton from "../CustomButton/CustomButton";
import { tg_40, watsapp } from "../../shared/Images";
import { useModal } from "../../Context/ModalContext";
import "./style.css";

const CustomBtnInfo = () => {
  const { openModal } = useModal();
  const handleTgClick = () => {
    window.open("https://t.me/school_of_future_online", "_blank");
  };
  const handleWatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=79687498175&text&type=phone_number&app_absent=0",
      "_blank"
    );
  };

  return (
    <div className="custom_btn_info">
      <CustomButton
        className="btn__big"
        text="Записаться на урок"
        onClick={openModal}
      />
      <div className="custom_text">
        <span>или написать</span>
        <img
          className="custom_info_img"
          src={tg_40}
          alt="tg_40"
          onClick={handleTgClick}
        />
        <img
          className="custom_info_img"
          src={watsapp}
          alt="watsapp"
          onClick={handleWatsAppClick}
        />
      </div>
    </div>
  );
};
export default CustomBtnInfo;
