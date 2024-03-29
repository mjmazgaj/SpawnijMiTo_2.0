import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import Shop from "./components/shop/Shop";
import { ProductsProvider } from "./components/shop/ProductsContext";
import Summary from "./components/shop/Summary";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./components/shop/ProductDetails";
import ScrollToTop from "./helpers/ScrollToTop";

const HomePage = () => {
  return (
    <>
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
    </>
  );
};

const App = () => {
  const [isShopMode, setIsShopMode] = useState(false);

  const handleToggleShopMode = () => {
    setIsShopMode((prevShopMode) => !prevShopMode);
  };

  return (
    <ProductsProvider>
      <Router>
        <div>
          <Nav
            toggleShopMode={handleToggleShopMode}
            isShopMode={isShopMode}
          />
          <Header
            toggleShopMode={handleToggleShopMode}
            isShopMode={isShopMode}
          />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/productdetails/:productId" element={<ProductDetails />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>

          <Contact />
          <Footer />
        </div>
      </Router>
    </ProductsProvider>
  );
};

export default App;
