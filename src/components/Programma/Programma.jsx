import { useState, useEffect } from "react";
import CustomButton from "../CustomButton/CustomButton";
import ProgLesson from "./ProgLesson";
import {
  ico_prog1,
  ico_prog2,
  ico_prog3,
  class1,
  class2,
  class3,
  class4,
  class5,
  class6,
  class7,
  class8,
  class9,
  class10,
  class11,
  placeholder_1,
  placeholder_2,
  placeholder_3,
} from "../../shared/Images/index";
import { lessonMap, priceMap, secondaryLessons } from "./data";
import "./style.css";
  const getRangeKey = (classNumber) => {
    if (classNumber >= 1 && classNumber <= 4) return '1-4';
    if (classNumber >= 5 && classNumber <= 8 ) return '5-8';
    if (classNumber >= 9 && classNumber <= 11) return '9-11';
    return '1-4';
  }
const Programma = ({
    classes,
    conditions,
    mainLessons: initialMainLessons,
}) => {
  
    const icons = [ico_prog1, ico_prog2, ico_prog3];

    const [selectedClass, setSelectedClass] = useState(classes[0] || '');
    const [formData, setFormData] = useState({
        class: '',
        parentName: '',
        phone: '',
    });

    const [currentImage, setCurrentImage] = useState(class1);

    useEffect(() => {
        const initialClassNumber = parseInt(classes[0].split(' ')[0]);
        switch (initialClassNumber) {
            case 1:
            case 2:
            case 3:
            case 4:
                setCurrentImage(class1);
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                setCurrentImage(class5);
                break;
            case 9:
            case 10:
            case 11:
                setCurrentImage(class9);
                break;
            default:
                setCurrentImage(class1);
        }
    }, [classes]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        localStorage.setItem('class', formData.class);
        localStorage.setItem('parentName', formData.parentName);
        localStorage.setItem('phone', formData.phone);
        console.log('Данные сохранены в localStorage:', formData);
        alert('Данные сохранены в localStorage!');
    };
    const getLessonsByClass = (className) => {
        const classNumber = parseInt(className.split(' ')[0]);
        console.log('Selected class:', className, 'Class number:', classNumber);

        return lessonMap[classNumber] || initialMainLessons;
    };

    const currentLessons = getLessonsByClass(selectedClass);

    const handleClassClick = (className) => {
        const classNumber = parseInt(className.split(' ')[0]);
        switch (classNumber) {
            case 1:
                setCurrentImage(class1);
                break;
            case 2:
                setCurrentImage(class2);
                break;
            case 3:
                setCurrentImage(class3);
                break;
            case 4:
                setCurrentImage(class4);
                break;
            case 5:
                setCurrentImage(class5);
                break;
            case 6:
                setCurrentImage(class6);
                break;
            case 7:
                setCurrentImage(class7);
                break;
            case 8:
                setCurrentImage(class8);
                break;
            case 9:
                setCurrentImage(class9);
                break;
            case 10:
                setCurrentImage(class10);
                break;
            case 11:
                setCurrentImage(class11);
                break;
            default:
                setCurrentImage(class1);
        }
        setSelectedClass(className);
    };

    const selectedClassNumber = parseInt(selectedClass.split(' ')[0]);
    const price = priceMap[getRangeKey(selectedClassNumber)];
    return (
        <div className="prog">
            <div className="container prog__class">
                <h3>Из чего состоит обучение:</h3>
                <div className="prog__class_item">
                    {classes.map((item) => (
                        <CustomButton
                            key={item}
                            text={item}
                            onClick={() => handleClassClick(item)}
                            className={`button ${
                                selectedClass === item ? 'selected' : ''
                            } btn__small`}
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
                                    Основная программа "Школы будущего Online"
                                    включает в себя все предметы предусмотренные
                                    ФГОС. Мы используем только современные
                                    педагогические материалы и учебники в
                                    электронном виде последнего доступного года
                                    издания. В качестве образовательной
                                    программы используется "Школа России" с
                                    усиленным английским языком. Все это
                                    позволяет сделать семейное образование
                                    эффективным, простым и интересным.
                                </p>
                            </div>
                            <div className="prog_content_top_left_items">
                                {conditions.map((cond, idx) => (
                                    <div
                                        key={idx}
                                        className="prog_content_top_left_item"
                                    >
                                        <img src={icons[idx]} alt="#" />
                                        <span>{cond}</span>
                                    </div>
                                ))}
                            </div>
                            <CustomButton
                                text={price}
                                className="btn__big"
                                onClick={() => console.log('Цена')}
                            />
                        </div>
                        <div className="prog_content_top_right">
                            <img
                                className="prog_content_top_right_img"
                                src={currentImage}
                                alt="#"
                            />
                            <h4>Предметы</h4>
                            <div className="prog_content_top_right_items">
                                {currentLessons.map((lesson, idx) => (
                                    <ProgLesson
                                        key={idx}
                                        img={lesson.img}
                                        title={lesson.title}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="prog__bottom">
                        <div className="prog__bottom_left">
                            <h3>Второстепенная программа</h3>
                            <p>
                                Дистанционное образование имеет свои особенности
                                и одной из них является возможность отделить
                                некоторые второстепенные предметы в отдельную
категорию. Рисование и музыка преподаются на
                                добровольной основе и не обязательны к
                                посещению, но просмотреть запись урока и
                                выполнить домашнее задание все же придется.
                            </p>
                            <h4>
                                Стоимость - включен в образовательный тариф.
                            </h4>
                        </div>
                        <div className="prog__bottom_right">
                            {secondaryLessons.map((lesson, idx) => (
                                <ProgLesson
                                    key={idx}
                                    img={lesson.img}
                                    title={lesson.title}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="prog__form">
                        {[
                            {
                                placeholder: 'Класс',
                                icon: placeholder_1,
                                name: 'class',
                                type: 'text',
                            },
                            {
                                placeholder: 'Имя родителя',
                                icon: placeholder_2,
                                name: 'parentName',
                                type: 'text',
                            },
                            {
                                placeholder: 'Телефон родителя',
                                icon: placeholder_3,
                                name: 'phone',
                                type: 'tel',
                            },
                        ].map((input, idx) => (
                            <div className="form_input_container" key={idx}>
                                <img
                                    className="form_input_img"
                                    src={input.icon}
                                    alt=""
                                />
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
                            className="btn__big"
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programma;

