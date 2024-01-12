import "./shop.css";

import { useProducts } from "./ProductsContext";

const Cart = () => {
  const { summaryProductList } = useProducts();

  const totalPrice = Object.values(summaryProductList)
    .reduce((acc, product) => acc + product.cost, 0)
    .toFixed(2);

  return (
    <div id="cart">
      <p>{totalPrice}</p>
    </div>
  );
};

export default Cart;
