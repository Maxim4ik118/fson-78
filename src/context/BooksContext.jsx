import { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookContextProvider = ({ children }) => {
  const [modal, setModal] = useState({ isOpen: false, visibleData: null });

  const onOpenModal = data => {
    setModal({
      isOpen: true,
      visibleData: data,
    });
  };

  const onCloseModal = () => {
    setModal({
      isOpen: false,
      visibleData: null,
    });
  };

  const date = new Date();
  return (
    <BookContext.Provider
      value={{
        modal,
        onOpenModal,
        onCloseModal,
        currentDate: date.getUTCDate(),
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
