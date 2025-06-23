import { useRef } from "react";
import "./style.css";

const AccordionItem = ({ accItem, onClick, isOpen }) => {
  const itemRef = useRef(null);

  return (
    <div className={`accordion_item ${isOpen ? "open" : ""}`}>
      <div className="accordion_header" onClick={onClick}>
        <span className="accordion_question">{accItem.question}</span>
        <div className={`accordion_btn ${isOpen ? "active" : ""}`}>
          {isOpen ? "×" : "+"}
        </div>
      </div>
      <div
        className="accordion_collapse"
        style={{
          height: isOpen ? `${itemRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="accordion_body" ref={itemRef}>
          {accItem.answer}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
