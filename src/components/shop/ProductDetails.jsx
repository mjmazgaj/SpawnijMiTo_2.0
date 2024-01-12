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
    return (
      <div>
        <Link to="/shop" className="btn">
          Kontynuuj zakupy
        </Link>
        <p>Ładujemy dane...</p>
      </div>
    );
  } else {
    return (
      <div className="product-detail__container">
        <Link to="/shop" className="btn">
          Kontynuuj zakupy
        </Link>
        <div className="product-detail-details">
          <div className="product-detail-details__text">
            <h2>{product.Name}</h2>
            <p>Kategoria: {product.Category.join(", ")}</p>
            <h3>Konstrukcja</h3>
            <p>Materiał: {product.ConstructionMaterial}</p>
            <p>Kolor: {product.ConstructionColor}</p>
            <h3>Blat</h3>
            <p>Materiał: {product.CountertopMaterial}</p>
            <p>blatu: {product.CountertopColor}</p>
            <h3 className="product-detail-details__price">
              Cena: {product.Price}
            </h3>
          </div>
          <div>
            <img src={product.Image} alt="" />
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetails;
