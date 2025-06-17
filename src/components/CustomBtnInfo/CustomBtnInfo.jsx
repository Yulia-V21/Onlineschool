import "./style.css";
import CustomButton from "../CustomButton/CustomButton";
import { tg_40, watsapp } from "../../shared/Images";

const CustomBtnInfo = () => {
  return (
    <div className="custom_btn_info">
      <CustomButton
        text="Записаться на урок"
        width="270px"
        height="65px"
        onClick={() => console.log("sdfgh")}
      />
      <div className="custom_text">
        <span>или написать</span>
        <img src={tg_40} alt="tg_40" />
        <img src={watsapp} alt="watsapp" />
      </div>
    </div>
  );
};
export default CustomBtnInfo;
