import { Link } from "react-router-dom";
import "./shop.css";
import SummaryProductList from "./SummaryProductList";

const Summary = () => {
  return (
    <div className="summary__container">
      <h3>Lista zakupów:</h3>
      <SummaryProductList />
      <div className="summary__buttons">
        <Link to="/shop" className="btn">
          Kontynuuj zakupy
        </Link>
        <Link to="/" className="btn btn-primary">
          Do kasy
        </Link>
      </div>
    </div>
  );
};

export default Summary;
