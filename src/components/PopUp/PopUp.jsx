import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { placeholder_1, placeholder_2, placeholder_3 } from "../../shared/Images";
import "./style.css";

const PopUp = ({ onClose }) => {
  const [formData, setFormData] = useState({
    class: "",
    parentName: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (!formData.class || !formData.parentName || !formData.phone) {
      alert("Пожалуйста, заполните все поля");
      return; 
    }

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          class: formData.class,
          parentName: formData.parentName,
          phone: formData.phone,
        }),
      });
      const data = await response.json();
      console.log("Success:", data);
      alert("Данные успешно отправлены!"); 
      onClose(); 
    } catch (error) {
      console.error("Error:", error);
      alert("Произошла ошибка при отправке.");
    }
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    window.open("https://school-of-future.online/personalpolitics.pdf", "_blank");
  };

  return (
    <div className="modal">
      <div className="modal_content">
        <button className="modal_close" onClick={onClose}>
          ×
        </button>
        <h2 className="modal_title">Отправить заявку</h2>
        <p className="modal_subtitle">
          Наш менеджер свяжется с Вами <br /> для предоставления консультации
        </p>
        <form className="modal_form" onSubmit={handleSubmit}>
          <div className="modal_input_div">
            <img className="modal_input_img" src={placeholder_1} alt="#" />
            <input
              type="text"
              name="class"
              placeholder="Класс"
              className="modal_input"
              value={formData.class}
              onChange={handleInputChange}
            />
          </div>
          <div className="modal_input_div">
            <img className="modal_input_img" src={placeholder_2} alt="#" />
            <input
              type="text"
              name="parentName"
              placeholder="Имя родителя"
              className="modal_input"
              value={formData.parentName}
              onChange={handleInputChange}
            />
          </div>
          <div className="modal_input_div">
            <img className="modal_input_img" src={placeholder_3} alt="#" />
            <input
              type="tel"
              name="phone"
              placeholder="Телефон родителя"
              className="modal_input"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <CustomButton
            text="Записаться на урок"
            className="btn__medium"
            onClick={handleSubmit} 
          />
        </form>
        <p className="modal_consent">
          Нажимая кнопку, вы даете согласие на{" "}
          <a
            href="https://school-of-future.online/personalpolitics.pdf"
            onClick={handleLinkClick}
          >
            обработку своих персональных данных
          </a>
        </p>
      </div>
    </div>
  );
};

export default PopUp;

