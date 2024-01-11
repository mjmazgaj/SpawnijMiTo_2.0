import { createContext, useContext, useState, useEffect } from "react";

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [productList, setProductList] = useState({});

  useEffect(() => {
    console.log("Current State:", productList);
  }, [productList]);

  const addItem = (productId, price) => {
    console.log(price);
    setProductList((prevProductList) => ({
      ...prevProductList,
      [productId]: {
        quantity: (prevProductList[productId]?.quantity || 0) + 1,
        cost: (prevProductList[productId]?.cost || 0.00) + price
      },
    }));
  };

  const removeItem = (productId, price) => {
    if (productList[productId]?.quantity > 1) {
      setProductList((prevProductList) => ({
        ...prevProductList,
        [productId]: {
          quantity: prevProductList[productId].quantity - 1,
          cost: prevProductList[productId].cost - price
        },
      }));
    } else if (productList[productId]?.quantity === 1) {
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
