
import Product from "./Product";

const ProductsList = ({ productsList }) => {
  return (
    
    <div className="productslist-container">
      <h1>Lista produktów:</h1>
      <ul>
        {productsList.map((product) => (
          <Product
            key={product.Id}
            id={product.Id}
            image={product.Image}
            name={product.Name}
            price={product.Price}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
