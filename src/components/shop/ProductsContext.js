import { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [summaryProductList, setSummaryProductList] = useState({});

  const addItem = (productId, price) => {
    setSummaryProductList((prevSummaryProductList) => ({
      ...prevSummaryProductList,
      [productId]: {
        quantity: (prevSummaryProductList[productId]?.quantity || 0) + 1,
        cost: (prevSummaryProductList[productId]?.cost || 0.00) + price
      },
    }));
  };

  const removeItem = (productId, price) => {
    if (summaryProductList[productId]?.quantity > 1) {
      setSummaryProductList((prevSummaryProductList) => ({
        ...prevSummaryProductList,
        [productId]: {
          quantity: prevSummaryProductList[productId].quantity - 1,
          cost: prevSummaryProductList[productId].cost - price
        },
      }));
    } else if (summaryProductList[productId]?.quantity === 1) {
      setSummaryProductList((prevSummaryProductList) => {
        const { [productId]: deletedKey, ...rest } = prevSummaryProductList;
        return rest;
      });
    }
  };

  return (
    <ProductsContext.Provider value={{ summaryProductList, addItem, removeItem }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};

export { ProductsProvider, useProducts };
