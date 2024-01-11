import { useClicks } from "./ClicksContext";

const Product = ({ id, image, name, price }) => {
  const { incrementClicks, decrementClicks } = useClicks();

  return (
    <li id={id} className="product-container" >
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>Cena: {price}</p>
      
      <div className="product-Clicks__buttons">
        <button onClick={() => incrementClicks(id)} className='btn'>+</button>
        <button onClick={() => decrementClicks(id)} className='btn'>-</button>
      </div>
    </li>
  );
};

export default Product;
