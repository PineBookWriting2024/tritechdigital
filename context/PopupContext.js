import { createContext, useContext, useState } from "react";

export const PopupContext = createContext(); // ✅ Context بنائیں

export const PopupProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // ✅ State بنائیں


  // ✅ Popup کو manually کھولنے اور بند کرنے کے لیے functions
  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <PopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

// ✅ Custom hook تاکہ ہر بار useContext import نہ کرنا پڑے
export const usePopup = () => useContext(PopupContext);
