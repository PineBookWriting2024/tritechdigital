import { createContext, useState } from "react";

export const PopupContext = createContext(); // ✅ Context بنائیں

export const PopupProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // ✅ State بنائیں

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <PopupContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </PopupContext.Provider>
  );
};
