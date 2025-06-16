import logo from "../../shared/Images/logoHeader.png";
import license from "../../shared/Images/ic_license.png";
import vk from "../../shared/Images/ic_vk.png";
import tg from "../../shared/Images/ic_tg.png";
import youtube from "../../shared/Images/ic_youtube.png";
import place from "../../shared/Images/ic_place.png";
import phone from "../../shared/Images/ic_tel.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <div className="footer__info_logo">
          <img src={logo} alt="" />
          <p>
            Соглашение о конфиденциальности ООО «Школа Будущего Онлайн»
            Российская Федерация, 141804, Московская обл., г. Дмитров, ул
            Московская, дом 23 Возрастной рейтинг 6+
          </p>
        </div>
        <div className="footer__info_class">
          <h4 className="footer__info_title">Классы</h4>
          <ul className="footer__info_list">
            <li>1-4 класс</li>
            <li>5-8 класс</li>
            <li>9-11 класс</li>
          </ul>
        </div>
        <div className="footer__info_doc">
          <h4 className="footer__info_title">Документы</h4>
          <div className="footer__info_license">
            <img src={license} alt="#" />
            <span>Лицензия</span>
          </div>
        </div>
        <div className="footer__info_soc">
          <h4 className="footer__info_title">Соцсети</h4>
          <ul className="footer_soc_list">
            <li>
              <img src={tg} alt="tg" />
            </li>
            <li>
              <img src={youtube} alt="youtube" />
            </li>
            <li>
              <img src={vk} alt="vk " />
            </li>
          </ul>
        </div>
        <div className="footer__info_adress">
          <div className="footer__info_place">
            <img src={place} alt="place" />
            <span>г.Дмитров ул.Московская, дом 23</span>
          </div>
          <div className="footer__info_">
            <img src={phone} alt="phone" />
            <span>8(800) 300-37-91</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
