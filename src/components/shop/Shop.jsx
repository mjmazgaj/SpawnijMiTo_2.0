import "./shop.css";
import { useState, useEffect } from "react";
import ProductsList from "./ProductsList";

const Shop = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/Products")
      .then((response) => response.json())
      .then((data) => setProductsList(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return <ProductsList productsList={productsList} />;
};

export default Shop;
