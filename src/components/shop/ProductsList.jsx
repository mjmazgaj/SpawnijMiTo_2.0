
import Product from "./Product";

const ProductsList = ({ productsList }) => {
  return (
    <div className="productslist-container">
      <h1>Lista produktów:</h1>
      <li>
        {productsList.map((product) => (
          <Product
            id={product.Id}
            image={product.Image}
            name={product.Name}
            price={product.Price}
          />
        ))}
      </li>
    </div>
  );
};

export default ProductsList;
