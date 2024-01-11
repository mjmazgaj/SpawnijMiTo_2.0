import { useProducts } from "./ProductsContext";

const Product = ({ id, image, name, price }) => {
  const { addItem, removeItem } = useProducts();

  return (
    <li id={id} className="product-container" >
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>Cena: {price}</p>
      <p>Id: {id}</p>
      
      <div className="productList__buttons">
        <button onClick={() => addItem(id)} className='btn'>+</button>
        <button onClick={() => removeItem(id)} className='btn'>-</button>
      </div>
    </li>
  );
};

export default Product;
