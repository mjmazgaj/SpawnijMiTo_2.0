import "./shop.css";
import { useProducts } from "./ProductsContext";
import SummaryProductItem from "./SummaryProductItem";

const SummaryProductList = () => {
  const { summaryProductList } = useProducts();
  let totalPrice = 0;

  const renderCartItems = () => {
    const cartItems = [];

    for (const key in summaryProductList) {
      if (summaryProductList.hasOwnProperty(key)) {
        const { cost, quantity } = summaryProductList[key];
        totalPrice += cost;

        cartItems.push(
          <SummaryProductItem id={key} cost={cost} quantity={quantity} />
        );
      }
    }

    return cartItems;
  };

  return (
    <div>
      <li>{renderCartItems()}</li>
      <p>Total Price: {totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default SummaryProductList;
