import { useProducts } from "./ProductsContext";

const SummaryProductItem = ({ id, product }) => {
  const { addItem, removeItem, summaryProductList } = useProducts();

  return (
    <ul id={id} className="summary-product-item__container">
      <img src={product.Image} alt="" />
      <div className="summary-product-item__details">
        <p>{product.Name}</p>

        <div className="summary-product-item__buttons">
          <button onClick={() => addItem(product)} className="btn">
            +
          </button>
          <p className="summary-product-item__quantity">Ilość: {product.quantity}</p>
          <button onClick={() => removeItem(product)} className="btn">
            -
          </button>
        </div>
        <p className="summary-product-item__cost">Koszt: {product.cost.toFixed(2)} zł</p>
      </div>
    </ul>
  );
};

export default SummaryProductItem;
