import { useProducts } from "./ProductsContext";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

const SummaryProductItem = ({ id, product }) => {
  const { addItem, removeItem, summaryProductList } = useProducts();

  return (
    <ul id={id} className="summary-product-item__container">
      <img src={product.Image} alt="" />
      <div className="summary-product-item__details">
        <p>{product.Name}</p>

        <div className="summary-product-item__buttons">
          <CiSquarePlus className="summary-product-item__button" onClick={() => addItem(product)}/>
          <p className="summary-product-item__quantity">Ilość: {product.quantity}</p>
          <CiSquareMinus className="summary-product-item__button" onClick={() => removeItem(product)}/>
        </div>
        <p className="summary-product-item__cost">Koszt: {product.cost.toFixed(2)} zł</p>
      </div>
    </ul>
  );
};

export default SummaryProductItem;
