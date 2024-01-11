import { createContext, useContext, useState, useEffect } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    console.log("Current State:", productList);
  }, [productList]);

  const addItem = (productId) => {
    setProductList((prevProductList) => ({
      ...prevProductList,
      [productId]: (prevProductList[productId] || 0) + 1,
    }));
  };

  const removeItem = (productId) => {
    if (productList[productId] > 1) {
      setProductList((prevProductList) => ({
        ...prevProductList,
        [productId]: prevProductList[productId] - 1,
      }));
    } else if (productList[productId] === 1) {
      setProductList((prevProductList) => {
        const { [productId]: deletedKey, ...rest } = prevProductList;
        return rest;
      });
    }
  };

  return (
    <ProductsContext.Provider value={{ productList, addItem, removeItem }}>
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
