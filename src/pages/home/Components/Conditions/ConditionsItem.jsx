const ConditionItem = ({ src, alt, text }) => {
  return (
    <div className="condition_item">
      <img src={src} alt={alt} />
      <span>{text}</span>
    </div>
  );
};

export default ConditionItem;
