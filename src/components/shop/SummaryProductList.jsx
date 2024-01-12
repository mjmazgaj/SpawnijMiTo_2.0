import "./shop.css";
import { useProducts } from "./ProductsContext";
import SummaryProductItem from "./SummaryProductItem";

const SummaryProductList = () => {
  const { summaryProductList } = useProducts();

  const totalPrice = Object.values(summaryProductList)
    .reduce((acc, { cost }) => acc + cost, 0)
    .toFixed(2);

  const renderCartItems = () =>
    Object.entries(summaryProductList).map(([id, product]) => (
      <SummaryProductItem key={id} product={product} />
    ));

  return (
    <div>
      <li>{renderCartItems()}</li>
      <p>Total Price: {totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default SummaryProductList;
