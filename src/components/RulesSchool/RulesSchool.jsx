import { useState } from "react";
import { rulesData } from "./RulesData";
import './style.css'

const RulesSchool = () => {
  const [content, setContent] = useState('lesson');
  const [activeType, setActiveType] = useState('lesson');

  const currentItem = rulesData.find(item => item.type === content);

  function handleClick(type) {
    setContent(type);
    setActiveType(type);
  }

  return (
    <div className="rules">
      <div className="rules__container container">
        <h3 className="rules__title">Что внутри</h3>
        <div className="rules__btns">
          <button  className={`rules__btn ${activeType === 'lesson' ? 'active' : ''}`} onClick={() => handleClick('lesson')}>Живой урок с учителем</button>
          <button className={`rules__btn ${activeType === 'additional' ? 'active' : ''}`}  onClick={() => handleClick('additional')}>Дополнительный материал</button>
          <button className={`rules__btn ${activeType === 'simulator' ? 'active' : ''}`}  onClick={() => handleClick('simulator')}>Тренажер</button>
          <button className={`rules__btn ${activeType === 'homework' ? 'active' : ''}`}  onClick={() => handleClick('homework')}>Домашняя работа</button>
        </div>
        <div className="rules__content">
          {currentItem && (
            <>
              <img className="rules__img" src={currentItem.Img} alt="#" />
              <p>{currentItem.text}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RulesSchool;