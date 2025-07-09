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


