import { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [summaryProductList, setSummaryProductList] = useState({});

  const addItem = (product) => {
    setSummaryProductList((prevSummaryProductList) => {
      const updatedSummaryProductList = { ...prevSummaryProductList };

      if (updatedSummaryProductList[product.Id]) {
        updatedSummaryProductList[product.Id].quantity += 1;
        updatedSummaryProductList[product.Id].cost += parseFloat(product.Price);
      } else {
        updatedSummaryProductList[product.Id] = {
          ...product,
          quantity: 1,
          cost: parseFloat(product.Price),
        };
      }

      return updatedSummaryProductList;
    });
  };

  const removeItem = (product) => {
    setSummaryProductList((prevSummaryProductList) => {
      const updatedSummaryProductList = { ...prevSummaryProductList };

      if (updatedSummaryProductList[product.Id]) {
        if (updatedSummaryProductList[product.Id].quantity > 1) {
          updatedSummaryProductList[product.Id].quantity -= 1;
          updatedSummaryProductList[product.Id].cost -= parseFloat(
            product.Price
          );
        } else {
          delete updatedSummaryProductList[product.Id];
        }
      }

      return updatedSummaryProductList;
    });
  };

  return (
    <ProductsContext.Provider
      value={{ summaryProductList, addItem, removeItem }}
    >
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
