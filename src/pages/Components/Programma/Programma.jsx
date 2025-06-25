import CustomButton from "../../../components/CustomButton/CustomButton";
import ProgLesson from "./ProgLesson";
import {
  ico_prog1,
  ico_prog2,
  ico_prog3,
  progr__comp,
  placeholder_1,
  placeholder_2,
  placeholder_3,
} from "../../../shared/Images/index";
import "./style.css";

const Programma = (props) => {
  const {
    className1,
    className2,
    className3,
    className4,
    text,
    condition1,
    condition2,
    condition3,
    price,
    less_img_1,
    less_img_2,
    less_img_3,
    less_img_4,
    less_img_5,
    less_img_6,
    less_img_7,
    less_img_8,
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
    lesson6,
    lesson7,
    lesson8,
    paragraph,
  } = props;
  return (
    <div className=" prog">
      <div className="container prog__class">
        <h3>Из чего состоит обучение:</h3>
        <div className="prog__class_item">
          <CustomButton
            text={className1}
            width="125px"
            height="30px"
            onClick={() => console.log("fhgfd")}
          />
          <CustomButton
            text={className2}
            width="125px"
            height="30px"
            onClick={() => console.log("fhgfd")}
          />
          <CustomButton
            text={className3}
            width="125px"
            height="30px"
            onClick={() => console.log("fhgfd")}
          />
          <CustomButton
            text={className4}
            width="125px"
            height="30px"
            onClick={() => console.log("fhgfd")}
          />
        </div>
      </div>
      <div className="prog__bg">
        <div className=" container prog_content">
          <div className="prog_content_top">
            <div className="prog_content_top_left">
              <div className="prog_content_top_left_text">
                <h3>Основная программа </h3>
                <p>{text}</p>
              </div>
              <div className="prog_content_top_left_items">
                <div className="prog_content_top_left_item">
                  <img src={ico_prog1} alt="#" />
                  <span>{condition1}</span>
                </div>
                <div className="prog_content_top_left_item">
                  <img src={ico_prog2} alt="#" />
                  <span>{condition2}</span>
                </div>
                <div className="prog_content_top_left_item">
                  <img src={ico_prog3} alt="#" />
                  <span>{condition3}</span>
                </div>
              </div>
              <CustomButton
                text={price}
                width="190px"
                height="52px"
                onClick={() => console.log("fhgfd")}
              />
            </div>
            <div className="prog_content_top_right">
              <img
                className="prog_content_top_right_img"
                src={progr__comp}
                alt="#"
              />
              <h4>Предметы</h4>
              <div className="prog_content_top_right_items">
                <ProgLesson img={less_img_1} title={lesson1} />
                <ProgLesson img={less_img_2} title={lesson2} />
                <ProgLesson img={less_img_3} title={lesson3} />
                <ProgLesson img={less_img_4} title={lesson4} />
                <ProgLesson img={less_img_5} title={lesson5} />
                <ProgLesson img={less_img_6} title={lesson6} />
              </div>
            </div>
            </div>
        
        <div className="prog__bottom">
          <div className="prog__bottom_left">
            <h3>Второстепенная программа</h3>
            <p>{paragraph}</p>
            <h4>Стоимость - включен в образовательный тариф.</h4>
          </div>
          <div className="prog__bottom_right">
            <ProgLesson img={less_img_7} title={lesson7} />
            <ProgLesson img={less_img_8} title={lesson8} />
          </div>
        </div>
        <div className="prog__form">
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
            text="Записаться на урок"
            width="210px"
            height="50px"
            onClick={() => console.log("fhgfd")}
          />
        </div>
      </div>
      </div>
    </div>
  );
};
export default Programma;

