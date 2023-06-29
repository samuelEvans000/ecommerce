import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Product({ Uid, image, name, price }) {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [inCart, setInCart] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const existingItem = cart.find((item) => item.id === Uid);
    if (existingItem) {
      setInCart(true);
    }
  }, [cart, Uid]);

  const handleAdd = (productId) => {
    addToCart(productId);
    setInCart(true);
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
    setInCart(false);
  };

  const exist = (id) => {
    const existingItem = cart.find((item) => item.id === id);
    return existingItem ? true : false;
  };

  const clickHandle = (Uid) => {
    if (!exist(Uid)) {
      handleAdd(Uid);
    } else {
      handleRemove(Uid);
    }
  };

  const redirectPage = (Uid) => {
    navigate("/product/" + Uid);
  };

  return (
    <>
      <div className="product">
        <div onClick={() => redirectPage(Uid)}>
          <img src={image} alt={name} />
          <div className="product-info">
            <h2>{name}</h2>
            <h3> ${price}</h3>
          </div>
        </div>
        <button className="navbar-brand" onClick={() => clickHandle(Uid)}>
          {inCart ? "Remove" : "Add to Cart"}
        </button>
      </div>
    </>
  );
}

export default Product;
