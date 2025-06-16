import CustomButton from "../../components/CustomButton/CustomButton";
import { group, tg_40, watsapp } from "../../shared/Images";

const HomePage = () => {
  return (
    <main>
      <div>
        <CustomButton
          text="1-4 классы"
          width="130px"
          height="30px"
          onClick={() => console.log("sdfgh")}
        />
        <CustomButton
          text="5-8 классы"
          width="130px"
          height="30px"
          onClick={() => console.log("sdfgh")}
        />
        <CustomButton
          text="9-11 классы"
          width="130px"
          height="30px"
          onClick={() => console.log("sdfgh")}
        />
        <div>
          <div>
            <h2>Настоящая школа у вас дома!</h2>
            <p>
              Мы даем детям реальные знания, потому наши классы не превышают 10
              человек. А интерактивность и вовлеченность делает уроки
              интересными для детей.
            </p>
            <h3>Семейное образование с нами - это эффективно!</h3>
            <CustomButton
              text="Записаться на урок"
              width="273px"
              height="67px"
              onClick={() => console.log("sdfgh")}
            />
            <div>
              <span>или написать</span>
              <img src={tg_40} alt="tg_40" />
              <img src={watsapp} alt="watsapp" />
            </div>
            <img src={group} alt="group" />
          </div>
        </div>
      </div>
    </main>
  );
};
export default HomePage;
