import CustomButton from "../../../../components/CustomButton/CustomButton.jsx";
import { group } from "../../../../shared/Images/index.js";
import CustomBtnInfo from "../../../../components/CustomBtnInfo/CustomBtnInfo.jsx";
import { useNavigate } from 'react-router-dom';
import "./Main.css";
const Main = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="main__content">
        <div className=" main_container container">
          <div className="main__content_info">
            <div className="main__content_btn">
              <CustomButton
                text="1-4 классы"
                width="125px"
                height="30px"
                onClick={() => navigate('/grades1-4')}
              />
              <CustomButton
                text="5-8 классы"
                width="125px"
                height="30px"
                onClick={() => navigate('/grades5-8')}
              />
              <CustomButton
                text="9-11 классы"
                width="125px"
                height="30px"
                onClick={() => navigate('/grades9-11')}
              />
            </div>

            <div className="main__content_base">
              <h2 className="main__content_title">
                Настоящая школа <span>у вас дома!</span>
              </h2>
              <p className="main__content_text">
                Мы даем детям реальные знания, потому наши классы не превышают
                10 человек. А интерактивность и вовлеченность делает уроки
                интересными для детей.
              </p>
              <h4>Семейное образование с нами - это эффективно!</h4>
              <CustomBtnInfo />
            </div>
          </div>
          <div>
            <img src={group} alt="group" />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Main;
