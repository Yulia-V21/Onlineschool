import {
  ico_ru,
  ico_mat,
  ico_eng,
  ico_glob,
  ico_lit,
  ico_litch,
  ico_muz,
  ico_ris,
} from "../../shared/Images/index";
import Programma from "../Components/Programma/Programma";
const Programm1to4 = () => {
  return (
    <div>
      <Programma
        className1="1 класс"
        className2="2 класс"
        className3="3 класс"
        className4="4 класс"
        text='Основная программа "Школы будущего Online" включает в себя все предметы предусмотренные ФГОС. Мы используем только современные педагогические материалы и учебники в электронном виде последнего доступного года издания. В качестве образовательной  программы используется "Школа России" с усиленным английским языком. Все это позволяет сделать семейное образование  эффективным, простым и интересным.'
        condition1="2-3 занятия в день"
        condition2="С понедельника по четверг"
        condition3="Каникулы по общему графику"
        price="12 500р"
        less_img_1={ico_ru}
        less_img_2={ico_mat}
        less_img_3={ico_eng}
        less_img_4={ico_glob}
        less_img_5={ico_lit}
        less_img_6={ico_litch}
        less_img_7={ico_muz}
        less_img_8={ico_ris}
        lesson1="Русский язык"
        lesson2="Математика"
        lesson3="Английский язык"
        lesson4="Окружающий мир"
        lesson5="Литература"
        lesson6="Литературное чтение"
        lesson7="Музыка"
        lesson8="Рисование"
        paragraph="Дистанционное образование имеет свои особенности и одной из них является возможность отделить некоторые второстепенные предметы в отдельную категорию. Рисование и музыка преподаются на добровольной основе и не обязательны к посещению, но просмотреть запись урока и выполнить домашнее задание все же придется."
      />
    </div>
  );
};
export default Programm1to4;
