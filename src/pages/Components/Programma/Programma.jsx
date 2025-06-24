import CustomButton from "../../../components/CustomButton/CustomButton";
import ProgLesson from "./ProgLesson";
import {
  ico_prog1,
  ico_prog2,
  ico_prog3,
  progr__comp,
  ico_ru,
  ico_mat,
  ico_eng,
  ico_glob,
  ico_lit,
  ico_litch,
  ico_muz,
  ico_ris,
  placeholder_1,
  placeholder_2,
  placeholder_3,
} from "../../../shared/Images/index";
import "./style.css";

const Programma = () => {
  return (
    <div className="container prog">
      <div className="prog__class">
        <h3>Из чего состоит обучение:</h3>
        <div className="prog__class_item">
          <CustomButton
            text="1 класс"
            width="125px"
            height="30px"
            onClick={() => console.log("fhgfd")}
          />
          <CustomButton
            text="2 класс"
            width="125px"
            height="30px"
            onClick={() => console.log("fhgfd")}
          />
          <CustomButton
            text="3 класс"
            width="125px"
            height="30px"
            onClick={() => console.log("fhgfd")}
          />
          <CustomButton
            text="4 класс"
            width="125px"
            height="30px"
            onClick={() => console.log("fhgfd")}
          />
        </div>
      </div>
      <div className="prog_content">
        <div className="prog_content_top">
          <div className="prog_content_top_left">
            <div className="prog_content_top_left_text">
              <h3>Основная программа </h3>
              <p>
                Основная программа "Школы будущего Online" включает в себя все
                предметы предусмотренные ФГОС. Мы используем только современные
                педагогические материалы и учебники в электронном виде
                последнего доступного года издания. В качестве образовательной
                программы используется "Школа России" с усиленным английским
                языком. Все это позволяет сделать семейное образование
                эффективным, простым и интересным.
              </p>
            </div>
            <div className="prog_content_top_left_items">
              <div className="prog_content_top_left_item">
                <img src={ico_prog1} alt="#" />
                <span>2-3 занятия в день</span>
              </div>
              <div className="prog_content_top_left_item">
                <img src={ico_prog2} alt="#" />
                <span>С понедельника по четверг</span>
              </div>
              <div className="prog_content_top_left_item">
                <img src={ico_prog3} alt="#" />
                <span>Каникулы по общему графику</span>
              </div>
            </div>
            <CustomButton
              text="10 500p"
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
              <ProgLesson img={ico_ru} title="Русский язык" />
              <ProgLesson img={ico_mat} title="Математика" />
              <ProgLesson img={ico_glob} title="Окружающий мир" />
              <ProgLesson img={ico_litch} title="Литературное чтение" />
              <ProgLesson img={ico_lit} title="Литература" />
              <ProgLesson img={ico_eng} title="Английский язык" />
            </div>
          </div>
        </div>
        <div className="prog__bottom">
          <div className="prog__bottom_left">
            <h3>Второстепенная программа</h3>
            <p>
              Дистанционное образование имеет свои особенности и одной из них
              является возможность отделить некоторые второстепенные предметы в
              отдельную категорию. Рисование и музыка преподаются на
              добровольной основе и не обязательны к посещению, но просмотреть
              запись урока и выполнить домашнее задание все же придется.
            </p>
            <h4>Стоимость - включен в образовательный тариф.</h4>
          </div>
          <div className="prog__bottom_right">
            <ProgLesson img={ico_ris} title="Рисование" />
            <ProgLesson img={ico_muz} title="Музыка" />
          </div>
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
  );
};
export default Programma;
