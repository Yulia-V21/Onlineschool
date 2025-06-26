import {
  ico_ru,
  ico_mat,
  ico_eng,
  ico_glob,
  ico_lit,
  ico_muz,
  ico_ris,
  ico_biology,
  ico_chemistry,
  ico_history,
  ico_informatic,
} from "../../shared/Images/index";
import Programma from "../../components/Programma/Programma";

const Programm5to8 = () => {
  return (
    <Programma
      classes={["5 класс", "6 класс", "7 класс", "8 класс"]}
      conditions={[
        "3-5 занятий в день",
        "С понедельника по пятницу",
        "Каникулы по общему графику",
      ]}
      price="12 500р"
      mainLessons={[
        { title: "Русский язык", img: ico_ru },
        { title: "Математика", img: ico_mat },
        { title: "Английский язык", img: ico_eng },
        { title: "География", img: ico_glob },
        { title: "Литература", img: ico_lit },
        { title: "История", img: ico_history },
        { title: "Биология", img: ico_biology },
        { title: "Химия", img: ico_chemistry },
        { title: "Информатика", img: ico_informatic },
      ]}
      secondaryLessons={[
        { title: "Музыка", img: ico_muz },
        { title: "Рисование", img: ico_ris },
      ]}
    />
  );
};

export default Programm5to8;
