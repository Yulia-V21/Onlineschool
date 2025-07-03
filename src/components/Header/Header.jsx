import "./Header.css";
import {logo, head_menu} from "../../shared/Images/index";
import vector from "../../shared/Images/Vector.png";
import CustomButton from "../CustomButton/CustomButton";
import { useModal } from "../../Context/ModalContext";
import { useScroll } from "../../Context/ScrollContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { scrollToSection } = useScroll();
  const menuItems = {
    "Для кого": "conditions",
    "Как проходят уроки": "comparison",
    Преимущества: "benefits",
    Цены: "price",
  };
  const { openModal } = useModal();
  const handleClick = (url) => {
    navigate(url);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="container head_container">
        <div className="header_top">
          <img
            className="logo"
            src={logo}
            alt="Logo"
            onClick={() => handleClick("/")}
          />
          <div className="header_info">
            <span>8(800)300-37-91</span>
            <CustomButton
              text="Записаться на урок"
              className="btn__big"
              onClick={openModal}
            />
          </div>
          <div className="menu_icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={head_menu} alt="Menu" />
          </div>
        </div>
        <nav>
          <div className="header__bottom">
            <ul className="header__list">
              {Object.entries(menuItems).map(([text, sectionId]) => (
                <li key={text} onClick={() => scrollToSection(sectionId)}>
                  {text}
                </li>
              ))}
            </ul>
            <div className="header_acc">
              <img src={vector} alt="vector" />
              <span onClick={() => handleClick("/login")}>Личный кабинет</span>
            </div>
          </div>
          <div className={`mobile_menu ${isMenuOpen ? "open" : ""}`}>
            <ul className="mobile_menu_list">
              {Object.entries(menuItems).map(([text, sectionId]) => (
                <li
                  key={text}
                  onClick={() => {
                    scrollToSection(sectionId);
                    setIsMenuOpen(false);
                  }}
                >
                  {text}
                </li>
              ))}
              <li onClick={() => handleClick("/login")}>Личный кабинет</li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
