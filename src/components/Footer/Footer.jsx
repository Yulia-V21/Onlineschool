import {
  logo,
  license,
  vk,
  tg,
  youtube,
  place,
  phone,
} from "../../shared/Images";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const HandleNavigate = (url) => {
    navigate(url);
  };
  const handleClick = (link) => {
    window.open(`${link}`, "_blank");
  };

  return (
    <footer className="footer">
      <div className="footer__info">
        <div className="footer__info_logo">
          <img src={logo} alt="logo" style={{ width: "100%" }} />
          <p>
            Соглашение о конфиденциальности ООО «Школа Будущего Онлайн»
            Российская Федерация, 141804, Московская обл., г. Дмитров, ул
            Московская, дом 23 Возрастной рейтинг 6+
          </p>
        </div>
        <div className="footer__info_class">
          <h4 className="footer__info_title">Классы</h4>
          <ul className="footer__info_list">
            <li onClick={() => HandleNavigate("/grades1-4")}>1-4 класс</li>
            <li onClick={() => HandleNavigate("/grades5-8")}>5-8 класс</li>
            <li onClick={() => HandleNavigate("/grades9-11")}>9-11 класс</li>
          </ul>
        </div>
        <div className="footer__info_doc">
          <h4 className="footer__info_title">Документы</h4>
          <div className="footer__info_license">
            <img src={license} alt="#" />
            <span
              onClick={() =>
                handleClick("https://csscl.ru/images/csscl/docs/lic001.jpg")
              }
            >
              Лицензия
            </span>
          </div>
        </div>
        <div className="footer__info_soc">
          <h4 className="footer__info_title">Соцсети</h4>
          <ul className="footer_soc_list">
            <li
              onClick={() =>
                handleClick("https://t.me/school_of_future_online")
              }
            >
              <img src={tg} alt="tg" />
            </li>
            <li
              onClick={() =>
                handleClick("https://www.youtube.com/?app=desktop&hl=ru")
              }
            >
              <img src={youtube} alt="youtube" />
            </li>
            <li
              onClick={() =>
                handleClick("https://vk.com/school_of_future_online")
              }
            >
              <img src={vk} alt="vk " />
            </li>
          </ul>
        </div>
        <div className="footer__info_adress">
          <div className="footer__info_place">
            <img src={place} alt="place" />
            <span>г.Дмитров ул.Московская, дом 23</span>
          </div>
          <div className="footer__info_phone">
            <img src={phone} alt="phone" />
            <span>8(800) 300-37-91</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
