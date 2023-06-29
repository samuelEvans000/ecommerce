import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Quantity from "../components/Quantity";

const Cart = () => {
  const { cart, cartTotal } = useContext(CartContext);

  // const handleRemove = (productId) => {
  //   removeFromCart(productId);
  // };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const navigate = useNavigate();
  const redirectpage = (Uid) => {
    navigate("/product/" + Uid);
  };

  return (
    <>
      <Navbar />
      {cartTotal ? (
        <div className="cart-page">
          <div className="cart-container">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div
                  className="cart-img-div"
                  onClick={() => redirectpage(item.id)}
                >
                  <img src={item.image}></img>
                </div>
                <div className="cart-details-div">
                  <div>
                    <div>
                      <h3
                        onClick={() => redirectpage(item.id)}
                        className="cart-item-name"
                      >
                        {item.name}
                      </h3>
                    </div>
                    <div>
                      <p className="cart-item-price ">${item.price}</p>
                    </div>
                  </div>
                  <div>
                    <Quantity id={item.id} key={item.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3>Total price : ${cartTotal}</h3>
            <button className="navbar-brand">Place Order</button>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h3>No Items in Cart....</h3>
          </div>
          <div>
            <button onClick={() => navigate("/")} className="navbar-brand">
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
