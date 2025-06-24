import { application_img, bg_form } from "../../../../shared/Images";
import Form from "../../../../components/Form/Form";
import "./style.css";
const Application = () => {
  return (
      <div className="container application__content">
        <div className="application_item_form">
          <img className="bg_form" src={bg_form} alt="#" />
            <Form />
        </div>
        <div className="application_item_content">
          <h3 className="application__title">Все еще <span>сомневаетесь?</span></h3>
          <p className="application__text">
            Всегда страшно переходить на что-то новое и неизведанное, потому мы
            предоставляем нашим клиентам возможность попробовать обучаться
            первую неделю абсолютно бесплатно.
          </p>
          <img className="application__img" src={application_img} alt="#" />
        </div>
      </div>

  );
};
export default Application;
