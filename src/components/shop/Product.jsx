const Product = ({ id, image, name, price }) => {
  return (
    <ul className="product-container" key={id}>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>Cena: {price}</p>
    </ul>
  );
};

export default Product;
