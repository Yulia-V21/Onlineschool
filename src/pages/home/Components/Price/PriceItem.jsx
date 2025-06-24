import CustomBtn from "../../../../components/CustomButton/CustomButton";
import { price_ico } from "../../../../shared/Images/index";
import { useNavigate } from "react-router-dom";

const PriceItem = ({ title, subtitle, price, points, src, link }) => {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate(link)
  }
  return (
    <div className="price_item">
      <div className="price_wrap">
        <h5>{price}</h5>
        <span> /мес</span>
      </div>
      <div className="price__item_info">
        <div className="price__item_title">
          <h4>{title}</h4>
          <span>{subtitle}</span>
        </div>
        <div className="price__item_points">
          <ul className="price_list">
            {points.map((point, index) => (
              <li key={index}>
                <img src={price_ico} alt="" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <CustomBtn
          text="Подробнее"
          width="160px"
          height="32px"
          onClick={handleNav}
        />
        <img className="price__img" src={src} alt="#" />
      </div>
    </div>
  );
};
export default PriceItem;

