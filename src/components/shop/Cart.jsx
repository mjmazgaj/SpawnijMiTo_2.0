import "./shop.css";

import { BsCartCheck } from "react-icons/bs";
import { BsCart } from "react-icons/bs";

import { useProducts } from "./ProductsContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { summaryProductList } = useProducts();

  const totalPrice = Object.values(summaryProductList)
    .reduce((acc, product) => acc + product.cost, 0)
    .toFixed(2);

  return (
    <div id="cart">
      <Link to="/summary">{totalPrice > 0.01 ? <BsCartCheck /> : <BsCart />}</Link>
      <p>Do zapłaty: </p>
      <p className="cart__price">{totalPrice}</p>
    </div>
  );
};

export default Cart;
