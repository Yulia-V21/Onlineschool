import "./Comparison.css";
import { comparison_1, comparison_2 } from "../../../../shared/Images/index";
const Comparison = () => {
  return (
    <div className="comparison">
      <h3>Глянем сравнение:</h3>
      <div className="comparison__content">
        <div className="comparison__img">
          <img src={comparison_1} alt="#" />
        </div>
        <div className="comparison__content_text comparison__content_school">
          <h3>Обычная школа</h3>
          <ul className="comparison__content_list">
            <li>
              Число детей в классе <br /><b>от 25</b>
            </li>
            <li>
              Количество уроков <br /><b>5-6 в день</b>
            </li>
            <li>
              Дополнительные занятия <br /><b>обязательно</b>
            </li>
            <li>
              Индивидуальный подход <br /><b>нет</b>
            </li>
            <li>
              Гибкий график занятий <br /><b>нет</b>
            </li>
            <li>
              Собрать ребенка в школу <br /><b>от 30 тыс. рублей</b>
            </li>
          </ul>
        </div>
        <div className="comparison__content_text comparison__content_online">
          <h3>Онлайн школа</h3>
          <ul className="comparison__content_list">
            <li>
              Число детей в классе <br /><b>до 12</b>
            </li>
            <li>
              Количество уроков <br /><b>2-3 в день</b>
            </li>
            <li>
              Дополнительные занятия <br /><b>по желанию</b>
            </li>
            <li>
              Индивидуальный подход <br /><b>да</b>
            </li>
            <li>
              Гибкий график занятий <br /><b>да</b>
            </li>
            <li>
              Собрать ребенка в школу <br /><b>0 рублей</b>
            </li>
          </ul>
        </div>
        <div className="comparison__img">
          <img src={comparison_2} alt="#" />
        </div>
      </div>
    </div>
  );
};
export default Comparison;
