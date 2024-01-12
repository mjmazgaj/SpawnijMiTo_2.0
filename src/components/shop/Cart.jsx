import "./shop.css";

import { useProducts } from "./ProductsContext";

const Cart = () => {
  const { productList } = useProducts();
  
  let totalPrice = 0;

  for (const key in productList) {
    if (productList.hasOwnProperty(key)) {
      totalPrice += productList[key].cost;
    }
  }
  return (
    <div id="cart">
      <p>{totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
