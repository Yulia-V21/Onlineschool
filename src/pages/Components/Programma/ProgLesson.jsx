import './style.css'
const ProgLesson = ({img, title}) => {
  return (
    <div className="prog_content_top_right_item">
      <img src={img} alt="#" />
      <span>{title}</span>
    </div>
  );
};
export default ProgLesson;