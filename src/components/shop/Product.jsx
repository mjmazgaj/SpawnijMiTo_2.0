import { useClicks } from "./ClicksContext";

const Product = ({ id, image, name, price }) => {
  const { incrementClicks, decrementClicks } = useClicks();

  return (
    <ul className="product-container" key={id}>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>Cena: {price}</p>
      
      <div className="product-Clicks__buttons">
        <button onClick={incrementClicks} className='btn'>+</button>
        <button onClick={decrementClicks} className='btn'>-</button>
      </div>
    </ul>
  );
};

export default Product;
