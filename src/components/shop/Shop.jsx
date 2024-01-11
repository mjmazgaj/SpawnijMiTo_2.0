import "./shop.css";
import { useState, useEffect } from "react";
import ProductsList from "./ProductsList";

import { useClicks } from "./ClicksContext";

const Shop = () => {
  const [productsList, setProductsList] = useState([]);
  const { clicks } = useClicks();

  useEffect(() => {
    fetch("http://localhost:3001/Products")
      .then((response) => response.json())
      .then((data) => setProductsList(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <p>Liczba kliknięć: {clicks}</p>
      <ProductsList productsList={productsList} />;
    </>
  );
};

export default Shop;
