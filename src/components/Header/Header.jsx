import "./Header.css";
import logo from "../../shared/Images/logoHeader.png";
import vector from "../../shared/Images/Vector.png";
import CustomButton from "../CustomButton/CustomButton";

const Header = () => {
  return (
    <header className="header">
      <div className="header_top">
        <img src={logo} alt="Logo" />
        <div className="header_info">
          <span>8(800)300-37-91</span>
          <CustomButton
          text="Записаться на урок"
          width="222px"
          height="57px"
          onClick={() => console.log('sdfgh')}
          />
        </div>
      </div>
      <nav>
        <div className="header__bottom">
          <ul className="header__list">
            <li>Для кого</li>
            <li>Как проходят уроки</li>
            <li>Преимущества</li>
            <li>Цены</li>
            <li>Контакты</li>
          </ul>
          <div className="header_acc">
            <img src={vector} alt="vector" />
            <span>Личный кабинет</span>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
