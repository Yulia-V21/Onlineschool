import CustomButton from "../CustomButton/CustomButton";
import {
  placeholder_1,
  placeholder_2,
  placeholder_3,
} from "../../shared/Images";
import "./style.css";

const Form = () => {
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
            <input type="text" placeholder="Класс" className="form_input" />
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
            />
          </div>
          <CustomButton
            text="Оставить заявку"
            width="180px"
            height="48px"
            onClick={() => console.log("ok")}
          />
        </div>
        <p className="form_consent">
          Нажимая кнопку, вы даете согласие на{" "}
          <a href="https://school-of-future.online/personalpolitics.pdf">
            обработку своих персональных данных
          </a>
        </p>
      </div>
    </div>
  );
};

export default Form;
