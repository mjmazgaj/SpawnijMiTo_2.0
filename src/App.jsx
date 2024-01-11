import React from "react";
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

const HomePage = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ProductsProvider>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>

          <Contact />
          <Footer />
        </div>
      </ProductsProvider>
    </Router>
  );
};

export default App;
