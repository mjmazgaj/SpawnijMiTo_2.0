
import Product from "./Product";

const ProductsList = ({ productsList }) => {
  return (
    
    <div className="productslist-container">
      <ul>
        {productsList.map((product) => (
          <Product
            key={product.Id}
            product={product}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
