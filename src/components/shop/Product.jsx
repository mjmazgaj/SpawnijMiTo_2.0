import { Link } from "react-router-dom";
import { useProducts } from "./ProductsContext";

const Product = ({ product }) => {
  const { addItem, removeItem, summaryProductList } = useProducts();
  
  const id = product.Id;

  const quantity = summaryProductList[id]?.quantity ? summaryProductList[id]?.quantity : 0;

  return (
    <li id={id} className="product__container" >
      <img src={product.Image} alt="" />
      <Link to={`/productdetails/${id}`}><h3>{product.Name}</h3></Link>
      <p>Cena: {product.Price}</p>
      
      <div className="product__buttons">
        <button onClick={() => addItem(product)} className='btn'>+</button>
        <button onClick={() => removeItem(product)} className='btn'>-</button>
        <p>{quantity}</p>
      </div>
    </li>
  );
};

export default Product;
