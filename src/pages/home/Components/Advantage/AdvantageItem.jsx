import { advant_vector } from "../../../../shared/Images/index";
import "./Advantage.css"

const AdvanteItem = ({  title, text }) => {
  return (
    <div className="advantage_content_left_item">
      <img src={advant_vector} alt="#" />
      <div className="advantage_content_left_text">
      <h4>{title}</h4>
      <p>{text}</p>
      </div>
    </div>
  );
};

export default AdvanteItem;

