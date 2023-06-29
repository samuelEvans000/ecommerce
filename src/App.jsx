import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import "./App.css";

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <Routes>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product/:id" element={<ProductDetails />}></Route>
          <Route path="/" element={<Products />}></Route>
        </Routes>
      </Router>
    </CartContextProvider>
  );
};

export default App;
