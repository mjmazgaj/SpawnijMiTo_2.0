import { createContext, useContext, useState } from "react";

const ClicksContext = createContext();

const ClicksProvider = ({ children }) => {
  const [clicks, setClicks] = useState(0);

  const incrementClicks = (productId) => {
    setClicks((prevClicks) => prevClicks + 1);
  };

  const decrementClicks = (productId) => {
    if (clicks > 0) 
      setClicks((prevClicks) => prevClicks - 1);
  };

  return (
    <ClicksContext.Provider
      value={{ clicks, incrementClicks, decrementClicks }}
    >
      {children}
    </ClicksContext.Provider>
  );
};

const useClicks = () => {
  const context = useContext(ClicksContext);
  if (!context) {
    throw new Error("useClicks must be used within a ClicksProvider");
  }
  return context;
};

export { ClicksProvider, useClicks };
