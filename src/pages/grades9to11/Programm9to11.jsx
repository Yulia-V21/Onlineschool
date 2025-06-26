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
  ico_geom,
  ico_physics,
  ico_society,
} from "../../shared/Images/index";
import Programma from "../../components/Programma/Programma";

const Programm9to11 = () => {
  return (
    <Programma
      classes={["5 класс", "6 класс", "7 класс", "8 класс"]}
      conditions={[
        "4-5 занятий в день",
        "С понедельника по пятницу",
        "Каникулы по общему графику",
      ]}
      price="12 500р"
      mainLessons={[
        { title: "Русский язык", img: ico_ru },
        { title: "Алгебра", img: ico_mat },
        { title: "Английский язык", img: ico_eng },
        { title: "География", img: ico_glob },
        { title: "Литература", img: ico_lit },
        { title: "История", img: ico_history },
        { title: "Биология", img: ico_biology },
        { title: "Химия", img: ico_chemistry },
        { title: "Информатика", img: ico_informatic },
        { title: "Геометрия", img: ico_geom },
        { title: "Обществознание", img: ico_physics },
        { title: "Физика", img: ico_society },
      ]}
      secondaryLessons={[
        { title: "Музыка", img: ico_muz },
        { title: "Рисование", img: ico_ris },
      ]}
    />
  );
};

export default Programm9to11;
