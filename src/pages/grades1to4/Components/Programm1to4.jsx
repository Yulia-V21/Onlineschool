import {
  ico_muz,
  ico_ris,
} from "../../../shared/Images/index";
import Programma from "../../../components/Programma/Programma";

const Programm1to4 = () => {
  return (
    <Programma
      classes={["1 класс", "2 класс", "3 класс", "4 класс"]}
      conditions={[
        "2-3 занятия в день",
        "С понедельника по четверг",
        "Каникулы по общему графику",
      ]}
      price="12 500р"
      secondaryLessons={[
        { title: "Музыка", img: ico_muz },
        { title: "Рисование", img: ico_ris },
      ]}
    />
  );
};

export default Programm1to4;
