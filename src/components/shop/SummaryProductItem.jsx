import { useProducts } from "./ProductsContext";

const SummaryProductItem = ({ id, product }) => {
  const { addItem, removeItem, summaryProductList } = useProducts();

  return (
    <ul id={id} className="summary-product-item__container">
    </ul>
  );
};

export default SummaryProductItem;
