import {
  placeholder_1,
  placeholder_2,
  placeholder_3,
  tg_40,
  watsapp,
  bg_horizontal,
} from "../../shared/Images";
import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./style.css";

const FormHorizontally = () => {
  const [formData, setFormData] = useState({
    class: "",
    parentName: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.class || !formData.parentName || !formData.phone) {
      alert("Пожалуйста, заполните все поля");
      return;
    }
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log("Success:", data);
      alert("Заявка успешно отправлена!");
      setFormData({ class: "", parentName: "", phone: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Произошла ошибка при отправке.");
    }
  };

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
            name: "class",
            value: formData.class,
          },
          {
            placeholder: "Имя родителя",
            icon: placeholder_2,
            name: "parentName",
            value: formData.parentName,
          },
          {
            placeholder: "Телефон родителя",
            icon: placeholder_3,
            name: "phone",
            value: formData.phone,
          },
        ].map((input, idx) => (
          <div className="form_input_container" key={idx}>
            <img className="form_input_img" src={input.icon} alt="" />
            <input
              type="text"
              placeholder={input.placeholder}
              className="form_input"
              name={input.name}
              value={input.value}
              onChange={handleInputChange}
            />
          </div>
        ))}
        <div className="custom_btn_info">
          <CustomButton
            text="Записаться на урок"
            className="btn__big"
            onClick={handleSubmit}
          />
          <div className="custom_text">
            <span>или написать</span>
            <img
              className="custom_info_img"
              src={tg_40}
              alt="tg"
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
