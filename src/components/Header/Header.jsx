import "./Header.css";
import logo from "../../shared/Images/logoHeader.png";
import vector from "../../shared/Images/Vector.png";
import CustomButton from "../CustomButton/CustomButton";
import { useModal } from "../../Context/ModalContext";
import { useScroll } from "../../Context/ScrollContext";
import  {useNavigate } from 'react-router-dom'


const Header = () => {
  const navigate = useNavigate();
  const { scrollToSection } = useScroll();
  const menuItems = {
    "Для кого": "conditions",
    "Как проходят уроки": "comparison",
    "Преимущества": "benefits",
    "Цены": "price",
    "Контакты": "contacts",
  };
  const { openModal } = useModal();
  const handleClick = (url) => {
    navigate(url)
  }
  return (
    <header>
      <div className="container head_container">
        <div className="header_top">
          <img className="logo" src={logo} alt="Logo" onClick={() => handleClick('/')} />
          <div className="header_info">
            <span>8(800)300-37-91</span>
            <CustomButton
              text="Записаться на урок"
              width="222px"
              height="57px"
              onClick={openModal}
            />
          </div>
        </div>
        <nav>
          <div className="header__bottom">
            <ul className="header__list">
              <ul className="header__list">
                {Object.entries(menuItems).map(([text, sectionId]) => (
                  <li key={text} onClick={() => scrollToSection(sectionId)}>
                    {text}
                  </li>
                ))}
              </ul>
            </ul>
            <div className="header_acc">
              <img src={vector} alt="vector" />
              <span onClick={() => handleClick('/login')}>Личный кабинет</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
