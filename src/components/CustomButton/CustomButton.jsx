import "./style.css";
const CustomButton = ({ className, text, onClick }) => {
  return (
   <button className={`btn ${className}`} onClick={onClick}>
    {text}
  </button>
  );
};
export default CustomButton;
