import CustomButton from "../CustomButton/CustomButton";
import { placeholder_1, placeholder_2, placeholder_3 } from "../../shared/Images";
import "./style.css";

const PopUp = ({ onClose }) => {
  const handleLinkClick = (e) => {
    e.preventDefault();
    window.open(
      "https://school-of-future.online/personalpolitics.pdf",
      "_blank"
    );
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
        <div className="modal_form">
          <div className="modal_input_div">
            <img className="modal_input_img" src={placeholder_1} alt="#" />
            <input type="text" placeholder="Класс" className="modal_input" />
          </div>
          <div className="modal_input_div">
            <img className="modal_input_img" src={placeholder_2} alt="#" />
          <input
            type="text"
            placeholder="Имя родителя"
            className="modal_input"
          />
          </div>
          <div className="modal_input_div">
            <img className="modal_input_img" src={placeholder_3} alt="#" />
          <input
            type="tel"
            placeholder="Телефон родителя"
            className="modal_input"
          />
          </div>
          <CustomButton
            text="Записаться на урок"
            width="180px"
            height="48px"
            onClick={() => console.log("ok")}
          />
        </div>
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
