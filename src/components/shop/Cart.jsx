import "./shop.css";

import { useProducts } from "./ProductsContext";

const Cart = () => {
  const { summaryProductList } = useProducts();
  
  let totalPrice = 0;

  for (const key in summaryProductList) {
    if (summaryProductList.hasOwnProperty(key)) {
      totalPrice += summaryProductList[key].cost;
    }
  }
  return (
    <div id="cart">
      <p>{totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
