import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import ProgLesson from "./ProgLesson";
import {
  ico_ru,
  ico_mat,
  ico_eng,
  ico_glob,
  ico_lit,
  ico_litch,
  ico_muz,
  ico_ris,
  ico_biology,
  ico_chemistry,
  ico_history,
  ico_informatic,
  ico_geom,
  ico_physics,
  ico_society,
  ico_prog1,
  ico_prog2,
  ico_prog3,
  class1,
  placeholder_1,
  placeholder_2,
  placeholder_3,
} from "../../shared/Images/index";
import "./style.css";

const Programma = ({
  classes,
  conditions,
  price,
  mainLessons: initialMainLessons,
  secondaryLessons,
}) => {
  const icons = [ico_prog1, ico_prog2, ico_prog3];

  const [selectedClass, setSelectedClass] = useState(classes[0] || "");
  const [formData, setFormData] = useState({
    class: "",
    parentName: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    localStorage.setItem("class", formData.class);
    localStorage.setItem("parentName", formData.parentName);
    localStorage.setItem("phone", formData.phone);
    console.log("Данные сохранены в localStorage:", formData);
    alert("Заявка сохранена локально!");
  };
  const getLessonsByClass = (className) => {
    const classNumber = parseInt(className.split(" ")[0]);
    console.log("Selected class:", className, "Class number:", classNumber);
    const lessonMap = {
      1: [
        { title: "Русский язык", img: ico_ru },
        { title: "Математика", img: ico_mat },
        { title: "Литературное чтение", img: ico_litch },
        { title: "Окружающий мир", img: ico_glob },
      ],
      2: [
        { title: "Русский язык", img: ico_ru },
        { title: "Математика", img: ico_mat },
        { title: "Литература", img: ico_lit },
        { title: "Окружающий мир", img: ico_glob },
        { title: "Английский язык", img: ico_eng },
      ],
      3: [
        { title: "Русский язык", img: ico_ru },
        { title: "Математика", img: ico_mat },
        { title: "Литература", img: ico_lit },
        { title: "Окружающий мир", img: ico_glob },
        { title: "Английский язык", img: ico_eng },
      ],
      4: [
        { title: "Русский язык", img: ico_ru },
        { title: "Математика", img: ico_mat },
        { title: "Литература", img: ico_lit },
        { title: "Окружающий мир", img: ico_glob },
        { title: "Английский язык", img: ico_eng },
      ],
      5: [
        { title: "Русский язык", img: ico_ru },
        { title: "Математика", img: ico_mat },
        { title: "Литература", img: ico_lit },
        { title: "История", img: ico_history },
        { title: "Биология", img: ico_biology },
        { title: "Информатика", img: ico_informatic },
        { title: "Английский язык", img: ico_eng },
        { title: "География", img: ico_glob },
      ],
      6: [
        { title: "Русский язык", img: ico_ru },
        { title: "Алгебра", img: ico_mat },
        { title: "Информатика", img: ico_informatic },
        { title: "История", img: ico_history },
        { title: "Биология", img: ico_biology },
        { title: "Английский язык", img: ico_eng },
        { title: "География", img: ico_glob },
        { title: "Обществознание", img: ico_society },
        { title: "Литература", img: ico_lit },
      ],
      7: [
        { title: "Русский язык", img: ico_ru },
        { title: "Алгебра", img: ico_mat },
        { title: "Химия", img: ico_chemistry },
        { title: "История", img: ico_history },
        { title: "Биология", img: ico_biology },
        { title: "Информатика", img: ico_informatic },
        { title: "Английский язык", img: ico_eng },
        { title: "География", img: ico_glob },
        { title: "Физика", img: ico_physics },
        { title: "Геометрия", img: ico_geom },
        { title: "Обществознание", img: ico_society },
        { title: "Литература", img: ico_lit },
      ],
      8: [
        { title: "Русский язык", img: ico_ru },
        { title: "Алгебра", img: ico_mat },
        { title: "Химия", img: ico_chemistry },
        { title: "История", img: ico_history },
        { title: "Биология", img: ico_biology },
        { title: "Информатика", img: ico_informatic },
        { title: "Английский язык", img: ico_eng },
        { title: "География", img: ico_glob },
        { title: "Физика", img: ico_physics },
        { title: "Геометрия", img: ico_geom },
        { title: "Обществознание", img: ico_society },
        { title: "Литература", img: ico_lit },
      ],
      9: [
        { title: "Русский язык", img: ico_ru },
        { title: "Алгебра", img: ico_mat },
        { title: "Химия", img: ico_chemistry },
        { title: "История", img: ico_history },
        { title: "Биология", img: ico_biology },
        { title: "Информатика", img: ico_informatic },
        { title: "Английский язык", img: ico_eng },
        { title: "География", img: ico_glob },
        { title: "Физика", img: ico_physics },
        { title: "Геометрия", img: ico_geom },
        { title: "Обществознание", img: ico_society },
        { title: "Литература", img: ico_lit },
      ],
      10: [
        { title: "Русский язык", img: ico_ru },
        { title: "Алгебра", img: ico_mat },
        { title: "Химия", img: ico_chemistry },
        { title: "История", img: ico_history },
        { title: "Биология", img: ico_biology },
        { title: "Информатика", img: ico_informatic },
        { title: "Английский язык", img: ico_eng },
        { title: "География", img: ico_glob },
        { title: "Физика", img: ico_physics },
        { title: "Геометрия", img: ico_geom },
        { title: "Обществознание", img: ico_society },
        { title: "Литература", img: ico_lit },
      ],
      11: [
        { title: "Русский язык", img: ico_ru },
        { title: "Алгебра", img: ico_mat },
        { title: "Химия", img: ico_chemistry },
        { title: "История", img: ico_history },
        { title: "Биология", img: ico_biology },
        { title: "Информатика", img: ico_informatic },
        { title: "Английский язык", img: ico_eng },
        { title: "География", img: ico_glob },
        { title: "Физика", img: ico_physics },
        { title: "Геометрия", img: ico_geom },
        { title: "Обществознание", img: ico_society },
        { title: "Литература", img: ico_lit },
      ],
    };

    return lessonMap[classNumber] || initialMainLessons;
  };

  const currentLessons = getLessonsByClass(selectedClass);

  return (
    <div className="prog">
      <div className="container prog__class">
        <h3>Из чего состоит обучение:</h3>
        <div className="prog__class_item">
          {classes.map((item) => (
            <CustomButton
              key={item}
              text={item}
              width="125px"
              height="35px"
              onClick={() => setSelectedClass(item)}
              className={selectedClass === item ? "selected" : ""}
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
                src={class1}
                alt="#"
              />
              <h4>Предметы</h4>
              <div className="prog_content_top_right_items">
                {currentLessons.map((lesson, idx) => (
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
                name: "class",
                type: "text",
              },
              {
                placeholder: "Имя родителя",
                icon: placeholder_2,
                name: "parentName",
                type: "text",
              },
              {
                placeholder: "Телефон родителя",
                icon: placeholder_3,
                name: "phone",
                type: "tel",
              },
            ].map((input, idx) => (
              <div className="form_input_container" key={idx}>
                <img className="form_input_img" src={input.icon} alt="" />
                <input
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  className="form_input"
                  value={formData[input.name]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
            <CustomButton
              text="Записаться на урок"
              width="210px"
              height="50px"
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programma;
