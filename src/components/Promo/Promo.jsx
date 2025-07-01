import CustomButton from "../CustomButton/CustomButton";
import CustomBtnInfo from "../CustomBtnInfo/CustomBtnInfo";
import { useNavigate } from "react-router-dom";
import "./style.css";
const Promo = ({ title, subtitle, text, img }) => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="promo__content">
         <div className="promo__content_btn container">
              <CustomButton
                text="1-4 классы"
                className="btn__small"
                onClick={() => navigate("/grades1-4")}
              />
              <CustomButton
                text="5-8 классы"
                className="btn__small"
                onClick={() => navigate("/grades5-8")}
              />
              <CustomButton
                text="9-11 классы"
                className="btn__small"
                onClick={() => navigate("/grades9-11")}
              />
            </div>
        <div className=" promo_container container">
          <div className="promo__content_info">
            <div className="promo__content_base">
              <h2 className="promo__content_title">
                {title} <span>{subtitle}</span>
              </h2>
              <p className="promo__content_text">{text}</p>
              <h4>Семейное образование с нами - это эффективно!</h4>
              <CustomBtnInfo />
            </div>
          </div>
          <div>
            <img className="promo__right_img" src={img} alt="group" />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Promo;
