import "./style.css";
import CustomButton from "../CustomButton/CustomButton";
import { tg_40, watsapp } from "../../shared/Images";
import { useModal } from "../../Context/ModalContext";

const CustomBtnInfo = () => {
  const{openModal} = useModal()
  return (
    <div className="custom_btn_info">
      <CustomButton
        text="Записаться на урок"
        width="270px"
        height="65px"
        onClick={openModal}
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
