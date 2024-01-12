import "./header.css";
import {Link} from "react-router-dom";

const CTA = ({toggleShopMode, isShopMode}) => {
  return (
    <div className="cta">
      <Link to="#contact" className="btn btn-primary">
        Kontakt
      </Link>
      <Link to={isShopMode ? "/" : "/shop"} className="btn" onClick={toggleShopMode}> {isShopMode ? "Strona główna" : "Sklep"}</Link>
    </div>
  );
};

export default CTA;
