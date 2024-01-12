import { useProducts } from "./ProductsContext";

const Product = ({ product }) => {
  const { addItem, removeItem, summaryProductList } = useProducts();
  
  const id = product.Id;

  const quantity = summaryProductList[id]?.quantity ? summaryProductList[id]?.quantity : 0;

  return (
    <li id={id} className="summary-product-item__container" >
      <img src={product.Image} alt="" />
      <h3>{product.Name}</h3>
      <p>Cena: {product.Price}</p>
      
      <div className="summary-product-item__buttons">
        <button onClick={() => addItem(product)} className='btn'>+</button>
        <button onClick={() => removeItem(product)} className='btn'>-</button>
        <p>{quantity}</p>
      </div>
    </li>
  );
};

export default Product;
