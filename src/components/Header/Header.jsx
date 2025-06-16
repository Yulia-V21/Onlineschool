import "./Header.css";
import "../Button.css";
import logo from "../../shared/Images/logoHeader.png";
import vector from "../../shared/Images/Vector.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header_top">
        <img src={logo} alt="Logo" />
        <div className="header_info">
          <span>8(800)300-37-91</span>
          <button className="btn">Записаться на урок</button>
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
