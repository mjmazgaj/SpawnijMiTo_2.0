import "./nav.min.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import Cart from "../shop/Cart";

const HomeNav = ({ activeNav, setActiveNav }) => {
  return (
    <div className="homenav">
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </div>
  );
};

const ShopNav = () => {
  return (
    <div className="shopnav">
      <Cart />
    </div>
  );
};

const Nav = ({ toggleShopMode, isShopMode }) => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
        <div>
          <a
            href={isShopMode ? "/": "#"}
            onClick={() => {
              setActiveNav("#");
              if (isShopMode) toggleShopMode();
            }}
            className={activeNav === "#" ? "active" : ""}
          >
            <AiOutlineHome activeNav={activeNav} setActiveNav={setActiveNav} />
          </a>
        </div>
        {!isShopMode && (
          <HomeNav activeNav={activeNav} setActiveNav={setActiveNav} toggleShopMode={toggleShopMode} />
        )}
        {isShopMode && <ShopNav />}
    </nav>
  );
};

export default Nav;
