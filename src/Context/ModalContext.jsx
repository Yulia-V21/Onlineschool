import { createContext, useContext, useState } from 'react';
import PopUp from '../../src/components/PopUp/PopUp';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
      {isModalOpen && <PopUp onClose={closeModal} />}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);