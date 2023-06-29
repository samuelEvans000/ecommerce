import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

// eslint-disable-next-line react/prop-types
function Quantity({ id }) {
  const { cart, addToCart, removeFromCart, updateQuantity } =
    useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(id, quantity);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  const handleIncreaseQuantity = () => {
    const updatedQuantity = quantity + 1;
    setQuantity(updatedQuantity);
    updateQuantity(id, updatedQuantity);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      const updatedQuantity = quantity - 1;
      setQuantity(updatedQuantity);
      updateQuantity(id, updatedQuantity);
    }
  };

  const exist = (id) => {
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) return true;
    return false;
  };

  return (
    <div>
      {exist(id) ? (
        <>
          <button className="maths" onClick={handleDecreaseQuantity}>
            -
          </button>
          <span>{quantity}</span>
          <button className="maths" onClick={handleIncreaseQuantity}>
            +
          </button>
          <button className="delete" onClick={handleRemoveFromCart}>
            <img src="/images/delete.png" alt="" />
          </button>
        </>
      ) : (
        <button className="navbar-brand" onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default Quantity;
