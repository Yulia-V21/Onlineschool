import {
  placeholder_1,
  placeholder_2,
  placeholder_3,
  tg_40,
  watsapp,
  bg_horizontal,
} from "../../shared/Images";
import CustomButton from "../CustomButton/CustomButton";

import "./style.css";

const FormHorizontally = () => {
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
    <div className="form_horizontally container">
      <img className="form_horizontally_bg" src={bg_horizontal} alt="#" />
      <div className="form_horizontally__form">
        {[
          {
            placeholder: "Класс",
            icon: placeholder_1,
          },
          {
            placeholder: "Имя родителя",
            icon: placeholder_2,
          },
          {
            placeholder: "Телефон родителя",
            icon: placeholder_3,
          },
        ].map((input, idx) => (
          <div className="form_input_container" key={idx}>
            <img className="form_input_img" src={input.icon} alt="" />
            <input
              type="text"
              placeholder={input.placeholder}
              className="form_input"
            />
          </div>
        ))}
        <div className="custom_btn_info">
          <CustomButton
            text="Записаться на урок"
            className="btn__big"
            onClick={() => console.log("da")}
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
      </div>
    </div>
  );
};
export default FormHorizontally;
