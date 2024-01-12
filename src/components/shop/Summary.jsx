import { Link } from "react-router-dom";
import "./shop.css";
import SummaryProductList from "./SummaryProductList";

const Summary = () => {
  return (
    <>
    <Link to="/shop" className="btn">Kontynuuj zakupy</Link>
    <SummaryProductList />
    </>
  );
};

export default Summary;
