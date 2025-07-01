import CustomBtnInfo from "../../../../components/CustomBtnInfo/CustomBtnInfo.jsx";
import CustomPromo from "../../../../components/CustomPromo/CustomPromo.jsx";
import ConditionItem from "./ConditionsItem.jsx";
import {
  ico_cond_1,
  ico_cond_2,
  ico_cond_3,
  ico_cond_4,
  ico_cond_5,
  promo_girl,
  cond_aspect_1,
  cond_aspect_2,
  cond_aspect_3,
  cond_aspect_4,
} from "../../../../shared/Images/index.js";
import "./style.css";

const Conditions = () => {
  return (
    <section className="conditions__content container"> 
      <div className="conditions__content_one">
        <h2 className="conditions__content_title">
          Кому подходит онлайн образование?
        </h2>
        <div className="conditions__content_points">
          <ConditionItem
            src={ico_cond_1}
            alt="#"
            text="Для тех, кто хочет получать знания"
          />
          <ConditionItem src={ico_cond_2} alt="#" text="Для путешественников" />
          <ConditionItem
            src={ico_cond_3}
            alt="#"
            text="Для семейного обучения"
          />
          <ConditionItem src={ico_cond_4} alt="#" text="Для спортсменов" />
          <ConditionItem
            src={ico_cond_5}
            alt="#"
            text="Для проживающих за рубежом"
          />
        </div>
        <CustomPromo img={promo_girl}/>
      </div>
      <div className="conditions__content_two">
        <h2 className="conditions__content_title">
          Как проходят уроки в нашей школе?
        </h2>
        <div className="condition__content_aspect">
          <div className="conditions__content_aspect_item">
            <div className="conditions__content_aspect_item_1">
              <img src={cond_aspect_1} alt="#" />
              <div className="conditions__content_text">
                <h4>Дополнительные материалы</h4>
                <span>
                  Материалы по каждой теме без лишней воды помогут закрепить
                  знания
                </span>
              </div>
            </div>
            <div className="conditions__content_aspect_item_1">
              <img src={cond_aspect_2} alt="#" />
              <div className="conditions__content_text">
                <h4>Проверка и оценка</h4>
                <span>
                  Все домашние задания проверяются учителем и выставляется
                  оценка в дневник
                </span>
              </div>
            </div>
          </div>
          <div className="conditions__content_aspect_item">
            <div className="conditions__content_aspect_item_1 conditions__reverse">
              <div className="conditions__content_text">
                <h4>Живые уроки с учителем </h4>
                <span>
                  Увлекательные уроки с учителем, на которых каждому ребенку
                  будет уделено внимание
                </span>
              </div>
              <img src={cond_aspect_3} alt="#" />
            </div>
            <div className="conditions__content_aspect_item_1 conditions__reverse">
              <div className="conditions__content_text">
                <h4>Домашнее задание </h4>
                <span>
                  Для закрепления всего ранее полученного материала дети
                  получают домашнее задание
                </span>
              </div>

              <img src={cond_aspect_4} alt="#" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
export default Conditions;
