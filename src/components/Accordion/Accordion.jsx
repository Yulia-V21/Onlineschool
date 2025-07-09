import { useState } from "react";
import AccordionItem from "./AccordionItem";
import "./Style.css";

const AccordionBlock = ({ accList }) => {
  const [openId, setId] = useState(null);

  return (
    <div className="accordion__block container">
      <div className="accordion">
        {accList.map((accItem, index) => (
          <AccordionItem
            key={index}
            onClick={() => (index === openId ? setId(null) : setId(index))}
            accItem={accItem}
            isOpen={index === openId}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionBlock;


