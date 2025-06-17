import CustomButton from "../../../components/CustomButton/CustomButton.jsx";
import { group } from "../../../shared/Images/index.js";
import CustomBtnInfo from "../../../components/CustomBtnInfo/CustomBtnInfo.jsx";
import "./Main.css";
const Main = () => {
  return (
    <main>
      <div className="main__content">
        <div className="main__content_info">
          <div className="main__content_btn">
            <CustomButton
              text="1-4 классы"
              width="125px"
              height="30px"
              onClick={() => console.log("sdfgh")}
            />
            <CustomButton
              text="5-8 классы"
              width="125px"
              height="30px"
              onClick={() => console.log("sdfgh")}
            />
            <CustomButton
              text="9-11 классы"
              width="125px"
              height="30px"
              onClick={() => console.log("sdfgh")}
            />
          </div>

          <div className="main__content_base">
            <h2 className="main__content_title">
              Настоящая школа <span>у вас дома!</span>
            </h2>
            <p className="main__content_text">
              Мы даем детям реальные знания, потому наши классы не превышают 10
              человек. А интерактивность и вовлеченность делает уроки
              интересными для детей.
            </p>
            <h3>Семейное образование с нами - это эффективно!</h3>
            <CustomBtnInfo />
          </div>
        </div>
        <div>
          <img src={group} alt="group" />
        </div>
      </div>
    </main>
  );
};
export default Main;
