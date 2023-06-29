import { useState, useEffect } from "react";
import Product from "../components/Product";
import Navbar from "../components/Navbar";
import "../App.css";
const Products = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="products">
          {products.map((product) => (
            <Product
              key={product.id}
              Uid={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
