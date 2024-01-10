import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Header from "./components/Home/header/Header";
import About from "./components/Home/about/About";
import Services from "./components/Home/services/Services";
import Portfolio from "./components/Home/portfolio/Portfolio";
import Testimonials from "./components/Home/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import Shop from "./components/shop/Shop";

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
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>

        <Contact />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
