import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import  { useContext } from 'react';
// import { CartContext } from '../context/CartContext';
import Navbar from "../components/Navbar";
import Quantity from "../components/Quantity";
import "../App.css";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  // const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const redirectpage = () => {
    navigate("/cart");
  };
  console.log(id);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/product.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching product data:", error);
      }
    };

    fetchProducts();
  }, []);

  const selected = products.find((product) => product.id === parseInt(id));

  return (
    <>
      <Navbar />
      <div>
        {selected ? (
          <div className="product-details-container">
            <div className="pro-img">
              <img src={selected.image}></img>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <button onClick={() => redirectpage()} className="navbar-brand">
                  Buy Now
                </button>
                <Quantity id={selected.id} key={selected.id} />
              </div>
            </div>
            <div className="pro-info">
              <h4 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                {selected.name}
              </h4>
              <h3> ${selected.price}</h3>
              <pre style={{ font: "inherit", lineHeight: "2" }}>
                {selected.description}
              </pre>
            </div>
          </div>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
