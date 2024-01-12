
import Product from "./Product";

const ProductsList = ({ productsList }) => {
  return (
    
    <div className="productslist-container">
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
