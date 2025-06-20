import {
  price_girl_1,
  price_girl_2,
  price_girl_3,
} from "../../../../shared/Images/index";
import PriceItem from "./PriceItem";
import "./Price.css";

const Price = () => {
  return (
    <div className="price">
      <div className="container price__container">
        <h3>Сколько стоит обучение в онлайн школе?</h3>
        <div className="price__items">
          <PriceItem title='1-4 класс' subtitle='Веселые и увлекательные уроки' price="10 500 ₽" points=
          {["2-3 урока в день пн-чт", "10-12 учеников в классе", "внимание к каждому ребенку", "интерактивные тренажеры","игровая форма обучения","зачисление в школу партнёр 12 000/год"]}
         src={price_girl_1} alt="#"/>
         <PriceItem title='5-8 класс' subtitle='Помогаем не потерять интерес' price="12 500 ₽" points=
          {["3-5 уроков в день пн-пт", "12-15 учеников в классе", "внимание к каждому ребёнку", "интерактивные тренажеры", "усиленная подготовка к ОГЭ", "зачисление в школу партнёр 12 000/год"]}
         src={price_girl_2} alt="#"/>
         <PriceItem title='9-11 класс' subtitle='Самый важный этап в жизни' price="16 500 ₽" points=
          {["4-5 уроков в день пн-пт", "12-15 учеников в классе", "внимание к каждому ребёнку", "Интерактивные тренажеры", "усиленная подготовка к ОГЭ и ЕГЭ", "зачисление в школу партнёр 12 000/год"]}
         src={price_girl_3} alt="#"/>
        </div>
      </div>
    </div>
  );
};
export default Price;

// import {
//   price_girl_1,
//   price_girl_2,
//   price_girl_3,
// } from "../../../../shared/Images/index";
// import PriceItem from "./PriceItem";
// import "./Price.css";
// const Price = () => {
//   return (
//     <div className="price">
//       <div className="container price__container">
//         <h3>Сколько стоит обучение в онлайн школе?</h3>
//         <div className="price__items">
//           <PriceItem price="10 500р" text="2-3 урока в день пн-чт" />
//           <img src={price_girl_1} alt="" />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Price;
