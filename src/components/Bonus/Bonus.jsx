import BonusItem from "./BonusItem";
import './style.css'

const Bonus = ({ items }) => {
  return (
    <div className="bonus container">
      <div className="bonus__items">
        {items.slice(0, 2).map((item, index) => (
          <BonusItem
            key={index}
            title={item.title}
            text={item.text}
            img={item.img}
          />
        ))}
      </div>
      <div className="bonus__items bonus_right">
        {items.slice(2).map((item, index) => (
          <BonusItem
            key={index}
            title={item.title}
            text={item.text}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Bonus;

// import BonusItem from "./BonusItem";
// import { bonus1, bonus2, bonus3, bonus4 } from "../../shared/Images";
// import './style.css'
// const Bonus = ({title1, title2, title3,  text1, text2, text3, img1,img2 }) => {
//   return (
//     <div className="bonus container">
//       <div className="bonus__items">
//         <BonusItem title={title1} text={text1} img={img1} />
//         <BonusItem title="Удобный график" text="Начинать учиться в онлайн школе можно в 9:00, 11:00 или 13:00. Это позволяет нашим ученикам эффективнее планировать свое расписание." img={bonus2} />
//       </div>
//       <div className="bonus__items bonus_right">
//         <BonusItem title={title2} text={text2} img={img2} />
//         <BonusItem title={title3} text={text3} img={bonus4} />
//       </div>
//     </div>
//   );
// };
// export default Bonus;
