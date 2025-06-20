import React, { useState } from "react";

const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <span>{title}</span>
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "×" : "+"}</button>
      </div>
      {isOpen && (
        <div>
          {description.map((item, index) => (
            <React.Fragment key={index}>
              {item.type === "text" ? (
                <p>{item.content}</p>
              ) : item.type === "list" ? (
                <ul>
                  {item.content.map((listItem, i) => (
                    <li key={i}>{listItem}</li>
                  ))}
                </ul>
              ) : null}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
