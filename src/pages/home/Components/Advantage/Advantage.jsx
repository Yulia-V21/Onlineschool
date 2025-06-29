import AdvanteItem from "./AdvantageItem";
import CustomBtnInfo from "../../../../components/CustomBtnInfo/CustomBtnInfo";
import {
  advant_img,
  advant_2,
  advant_3,
} from "../../../../shared/Images/index";
import { data } from "./data.js";
import { useState } from "react";
import "./Advantage.css";

const Advantage = () => {
  const [currentImg, setCurrentImg] = useState(advant_img);
  const [activeIndex, setActiveIndex] = useState(0); // по умолчанию активен первый элемент
  const images = [advant_img, advant_2, advant_3];

  const handleImageChange = () => {
    const currentIndex = images.indexOf(currentImg);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImg(images[nextIndex]);
  };

  const handleItemClick = (index) => {
    if (index === activeIndex) {
      // если клик по уже активному элементу — отключить активность
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      handleImageChange();
    }
  };

  return (
    <div className="advantage">
      <div className="advantage_container container">
        <div className="advantage_content">
          <div className="advantage_content_left">
            <h3>Дети любят наши уроки потому что:</h3>
            <AdvanteItem
              {...data[0]}
              onClick={() => handleItemClick(0)}
              isActive={activeIndex === 0}
            />
            <AdvanteItem
              {...data[1]}
              onClick={() => handleItemClick(1)}
              isActive={activeIndex === 1}
            />
            <AdvanteItem
              {...data[2]}
              onClick={() => handleItemClick(2)}
              isActive={activeIndex === 2}
            />
            <CustomBtnInfo />
          </div>
          <div className="advantage_content_right">
            <img className="advantage_content_right_img" src={currentImg} alt="#" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advantage;

