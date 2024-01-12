import { Link } from "react-router-dom";
import { useProducts } from "./ProductsContext";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

const Product = ({ product }) => {
  const { addItem, removeItem, summaryProductList } = useProducts();
  
  const id = product.Id;

  const quantity = summaryProductList[id]?.quantity ? summaryProductList[id]?.quantity : 0;

  return (
    <li id={id} className="product__container" >

      <img src={product.Image} alt="" />
      <div className="product__details">
        <Link to={`/productdetails/${id}`}><h3>{product.Name}</h3></Link>
        <p>Cena: {product.Price}</p>
        
        <div className="product__buttons">
          <CiSquarePlus className="product__button" onClick={() => addItem(product)}/>
          <p>{quantity}</p>
          <CiSquareMinus className="product__button" onClick={() => removeItem(product)}/>
        </div>
      </div>
    </li>
  );
};

export default Product;
