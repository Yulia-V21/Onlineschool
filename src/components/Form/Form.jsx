import  { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import {
  placeholder_1,
  placeholder_2,
  placeholder_3,
} from "../../shared/Images";
import "./style.css";

const Form = () => {
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
          body: JSON.stringify({
            class: formData.class,
            parentName: formData.parentName,
            phone: formData.phone,
          }),
        }
      );
      const data = await response.json();
      console.log("Success:", data);
      alert("Заявка успешно отправлена!");
      setFormData({
        class: "",
        parentName: "",
        phone: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Произошла ошибка при отправке.");
    }
  };

  return (
    <div className="form">
      <div className="form_content">
        <div className="form_items">
          <div className="form_input_container">
            <img
              className="form_input_img"
              src={placeholder_1}
              alt="Class icon"
            />
            <input
              type="text"
              placeholder="Класс"
              className="form_input"
              name="class"
              value={formData.class}
              onChange={handleInputChange}
            />
          </div>
          <div className="form_input_container">
            <img
              className="form_input_img"
              src={placeholder_2}
              alt="Parent name icon"
            />
            <input
              type="text"
              placeholder="Имя родителя"
              className="form_input"
              name="parentName"
              value={formData.parentName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form_input_container">
            <img
              className="form_input_img"
              src={placeholder_3}
              alt="Phone icon"
            />
            <input
              type="tel"
              placeholder="Телефон родителя"
              className="form_input"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <CustomButton
            text="Оставить заявку"
            className="btn__medium"
            onClick={handleSubmit}
          />
        </div>
        <p className="form_consent">
          Нажимая кнопку, вы даете согласие на{" "}
          <a
            href="https://school-of-future.online/personalpolitics.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            обработку своих персональных данных
          </a>
        </p>
      </div>
    </div>
  );
};

export default Form;

