import CustomBtnInfo from '../CustomBtnInfo/CustomBtnInfo';
import './style.css'
const CustomPromo = ({ img }) => {
  return (
    <div className="promo_position">
      <img className="promo_img" src={img} alt="#" />
      <div className="promo">
        <div className="promo_text">
          <h3>Первый месяц обучения от 5250 руб</h3>
          <span>
            Не знаете подойдет ли вашему ребенку обучение онлайн? Попробуйте
            первый месяц со скидкой 50%!
          </span>
        </div>
        <CustomBtnInfo />
      </div>
    </div>
  );
};
export default CustomPromo;

