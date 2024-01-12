import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [productsList, setProductsList] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/Products")
      .then((response) => response.json())
      .then((data) => setProductsList(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    const selectedProduct = productsList?.find((p) => p.Id == productId);
    setProduct(selectedProduct);
  }, [productId, productsList]);

  if (!product) {
    return <div>
      <Link to="/shop" className="btn">Kontynuuj zakupy</Link>
      <p>Ładujemy dane...</p>
    </div>;
  } else {
    return (
      <div>
        <Link to="/shop" className="btn">Kontynuuj zakupy</Link>
        <h2>Szczegóły </h2>
        <p>Nazwa: {product.Name}</p>
        <p>Kategoria: {product.Category.join(", ")}</p>
        <p>Construction Material: {product.ConstructionMaterial}</p>
        <p>Construction Color: {product.ConstructionColor}</p>
        <p>Countertop Material: {product.CountertopMaterial}</p>
        <p>Countertop Color: {product.CountertopColor}</p>
        <p>Price: {product.Price}</p>
        <img src={product.Image} alt="" />
      </div>
    );
  }
};

export default ProductDetails;
