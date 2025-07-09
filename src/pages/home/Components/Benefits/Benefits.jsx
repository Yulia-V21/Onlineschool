import BenefitsItem from "./BenefitsItem";
import {
  benefits_1,
  benefits_2,
  benefits_3,
  benefits_4,
  benefits_5,
  benefits_6,
  promo_boy
} from "../../../../shared/Images/index";
import "./Benefits.css"
import CustomPromo from "../../../../components/CustomPromo/CustomPromo";

const Benefits = () => {
  return (
    <div className="container benefits">
      <h3 className="benefits__title">Онлайн школа <br/>среднего образования это -</h3>
      <div className="benefits_points">
        <BenefitsItem img={benefits_1} title="Удобный график занятий" text="Вы можете выбрать удобное время начала занятий (9:00, 11:00 или 13:00)" />
        <BenefitsItem img={benefits_2} title="Записи уроков доступны всегда" text="Пропустил урок - не страшно!
Записи уроков можно посмотреть в любое время" />
        <BenefitsItem img={benefits_3} title="Сбалансированная нагрузка" text="Никаких лишних и не нужных занятий. Только важное и необходимое" />
        <BenefitsItem img={benefits_4} title="Не нужно покупать школьную форму и канцелярию" text="Тетрадка, ручка, линейка и карандаш - это все, что нужно для учебы в онлайн школе!" />
        <BenefitsItem img={benefits_5} title="Высококлассные педагоги" text="Опытные учителя прошедшие строгий отбор и использующие современные методы обучения" />
        <BenefitsItem img={benefits_6} title="Никакого стресса" text="В учебных классах поддерживается атмосфера дружбы и уважения. Никакого давления. Дети чувствуют себя комфортно" />
      </div>
      <CustomPromo img={promo_boy} />
    </div>
  );
};
export default Benefits;
