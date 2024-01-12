import "./shop.css";
import { useProducts } from "./ProductsContext";

const Summary = () => {
  const { productList } = useProducts();
  let totalPrice = 0;

  const renderCartItems = () => {
    const cartItems = [];

    for (const key in productList) {
      if (productList.hasOwnProperty(key)) {
        const { cost, quantity } = productList[key];
        totalPrice += cost;

        cartItems.push(
          <div key={key} className="cart-item">
            <p>Cost: {cost}</p>
            <p>Quantity: {quantity}</p>
          </div>
        );
      }
    }

    return cartItems;
  };

  return (
    <div>
      {renderCartItems()}
      <p>Total Price: {totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Summary;
