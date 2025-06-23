import { application_img } from "../../../../shared/Images";
import Form from "../../../../components/Form/Form";
import "./style.css";
const Application = () => {
  return (
    <div className="application">
      <div className="container application__content">
        <div className="application_item_form">
            <Form />
        </div>
        <div className="application_item_content">
          <h3>Все еще сомневаетесь?</h3>
          <p>
            Всегда страшно переходить на что-то новое и неизведанное, потому мы
            предоставляем нашим клиентам возможность попробовать обучаться
            первую неделю абсолютно бесплатно.
          </p>
          <img src={application_img} alt="#" />
        </div>
      </div>
    </div>
  );
};
export default Application;
