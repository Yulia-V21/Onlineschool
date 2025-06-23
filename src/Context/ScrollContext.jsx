import { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const sectionRefs = useRef({
    conditions: null,
    benefits: null,
    price: null,
    contacts: null,
  });

  const scrollToSection = (sectionId) => {
    sectionRefs.current[sectionId]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider value={{ sectionRefs, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);