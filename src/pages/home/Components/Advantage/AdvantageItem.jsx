import "./Advantage.css"

const AdvanteItem = ({  title, text, onClick, isActive }) => {
  return (
    <div className={`advantage_content_left_item ${isActive ? "active" : ""}`} onClick = {onClick}>
      <div className="advantage_content_left_text">
      <h4>{title}</h4>
      <p>{text}</p>
      </div>
    </div>
  );
};

export default AdvanteItem;

