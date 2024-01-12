import { useProducts } from "./ProductsContext";

const Product = ({ id, image, name, price }) => {
  const { addItem, removeItem, productList } = useProducts();
  
  const quantity = productList[id]?.quantity ? productList[id]?.quantity : 0;

  return (
    <li id={id} className="product-container" >
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>Cena: {price}</p>
      
      <div className="productList__buttons">
        <button onClick={() => addItem(id, parseFloat(price))} className='btn'>+</button>
        <button onClick={() => removeItem(id, parseFloat(price))} className='btn'>-</button>
        <p>{quantity}</p>
      </div>
    </li>
  );
};

export default Product;
