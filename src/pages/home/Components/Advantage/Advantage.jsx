import AdvanteItem from "./AdvantageItem";
import CustomBtnInfo from "../../../../components/CustomBtnInfo/CustomBtnInfo";
import { advant_img } from "../../../../shared/Images/index";
import { data } from "./data.js";
import "./Advantage.css";

const Advantage = () => {
  return (
    <div className="advantage">
      <div className="advantage_container container">
        <h3>Дети любят наши уроки потому что:</h3>
        <div className="advantage_content">
          <div className="advantage_content_left">
            <AdvanteItem {...data[0]} />
            <AdvanteItem {...data[1]} />
            <AdvanteItem {...data[2]} />
            <CustomBtnInfo />
          </div>
          <div className="advantage_content_right">
            <img src={advant_img} alt="#" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advantage;

// <AdvanteItem
//   title="Продвинутая геймификация"
//   text="Мы используем мини-игры чтобы увлечь ребенка в процесс решения задач и помочь усвоить материал в интересной форме"
// />
