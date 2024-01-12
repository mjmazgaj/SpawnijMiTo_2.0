import { useProducts } from "./ProductsContext";

const SummaryProductItem = ({ id, cost, quantity }) => {
  const { addItem, removeItem, summaryProductList } = useProducts();

  return (
    <ul id={id} className="summary-product-item__container" >
      <p>{id}</p>
    </ul>
  );
};

export default SummaryProductItem;
