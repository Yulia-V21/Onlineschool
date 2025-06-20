import { sertificate } from "../../../../shared/Images";
import './Sertificate.css'

const Sertificate = () => {
  return (
    <div className="container sertificate_container">
      <div className="sertificate_text">
        <h3>Аттестат государственного образца</h3>
        <p>
          Вы получите аттестат государственного образца. Он ничем не отличается
          от аттестата которые выдают в обычных школах.С аттестатом вы сможете
          продолжить обучение в лучших вузах страны.
        </p>
      </div>
      <div className="sertificate_img">
        <img src= {sertificate} alt="#" />
      </div>
    </div>
  );
};
export default Sertificate;
