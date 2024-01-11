import "./shop.css";
import { useState, useEffect } from "react";
import ProductsList from "./ProductsList";

import { useProducts } from "./ProductsContext";

const Shop = () => {
  const [productsList, setProductsList] = useState([]);

  const { productList } = useProducts();
  const liczbaElementow = Object.keys(productList).length;

  useEffect(() => {
    fetch("http://localhost:3001/Products")
      .then((response) => response.json())
      .then((data) => setProductsList(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div id="shop">
      <p>{liczbaElementow}</p>
      <ProductsList productsList={productsList} />;
    </div>
  );
};

export default Shop;
