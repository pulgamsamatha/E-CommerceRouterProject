import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import LoginForm from "./Components/LoginForm";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import NotFound from "./Components/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/logIn" element={<LoginForm />}></Route>
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;