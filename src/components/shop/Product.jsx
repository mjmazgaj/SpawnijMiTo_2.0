import { useProducts } from "./ProductsContext";

const Product = ({ id, image, name, price }) => {
  const { addItem, removeItem, summaryProductList } = useProducts();
  
  const quantity = summaryProductList[id]?.quantity ? summaryProductList[id]?.quantity : 0;

  return (
    <li id={id} className="summary-product-item__container" >
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>Cena: {price}</p>
      
      <div className="summary-product-item__buttons">
        <button onClick={() => addItem(id, parseFloat(price))} className='btn'>+</button>
        <button onClick={() => removeItem(id, parseFloat(price))} className='btn'>-</button>
        <p>{quantity}</p>
      </div>
    </li>
  );
};

export default Product;
