import "./style.css";
const CustomButton = ({ width, height, text, onClick }) => {
  return (
    <button style={{ width, height }} onClick={onClick} className="btn">
      {text}
    </button>
  );
};
export default CustomButton;
