import CustomButton from "../CustomButton/CustomButton";
import ProgLesson from "./ProgLesson";
import {
  ico_prog1,
  ico_prog2,
  ico_prog3,
  progr__comp,
  placeholder_1,
  placeholder_2,
  placeholder_3,
} from "../../shared/Images/index";
import "./style.css";

const Programma = ({
  classes,
  conditions,
  price,
  mainLessons,
  secondaryLessons,
}) => {
  const icons = [ico_prog1, ico_prog2, ico_prog3];

  return (
    <div className="prog">
      <div className="container prog__class">
        <h3>Из чего состоит обучение:</h3>
        <div className="prog__class_item">
          {classes.map((item, idx) => (
            <CustomButton
              key={idx}
              text={item}
              width="125px"
              height="35px"
              onClick={() => console.log("Выбран:", item)}
            />
          ))}
        </div>
      </div>

      <div className="prog__bg">
        <div className="container prog_content">
          <div className="prog_content_top">
            <div className="prog_content_top_left">
              <div className="prog_content_top_left_text">
                <h3>Основная программа</h3>
                <p>
                  Основная программа "Школы будущего Online" включает в себя все
                  предметы предусмотренные ФГОС. Мы используем только
                  современные педагогические материалы и учебники в электронном
                  виде последнего доступного года издания. В качестве
                  образовательной программы используется "Школа России" с
                  усиленным английским языком. Все это позволяет сделать
                  семейное образование эффективным, простым и интересным.
                </p>
              </div>
              <div className="prog_content_top_left_items">
                {conditions.map((cond, idx) => (
                  <div key={idx} className="prog_content_top_left_item">
                    <img src={icons[idx]} alt="#" />
                    <span>{cond}</span>
                  </div>
                ))}
              </div>
              <CustomButton
                text={price}
                width="190px"
                height="52px"
                onClick={() => console.log("Цена")}
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
                {mainLessons.map((lesson, idx) => (
                  <ProgLesson key={idx} img={lesson.img} title={lesson.title} />
                ))}
              </div>
            </div>
          </div>

          <div className="prog__bottom">
            <div className="prog__bottom_left">
              <h3>Второстепенная программа</h3>
              <p>
                Дистанционное образование имеет свои особенности и одной из них
                является возможность отделить некоторые второстепенные предметы
                в отдельную категорию. Рисование и музыка преподаются на
                добровольной основе и не обязательны к посещению, но просмотреть
                запись урока и выполнить домашнее задание все же придется.
              </p>
              <h4>Стоимость - включен в образовательный тариф.</h4>
            </div>
            <div className="prog__bottom_right">
              {secondaryLessons.map((lesson, idx) => (
                <ProgLesson key={idx} img={lesson.img} title={lesson.title} />
              ))}
            </div>
          </div>

          <div className="prog__form">
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
            <CustomButton
              text="Записаться на урок"
              width="210px"
              height="50px"
              onClick={() => console.log("Отправка")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programma;
