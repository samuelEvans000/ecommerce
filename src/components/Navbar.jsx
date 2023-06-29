import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const redirectpage = () => {
    navigate("/cart");
  };

  return (
    <nav className="navbar">
      <div>
        <NavLink className="logo" to="/">
          Shoppy
        </NavLink>
      </div>
      <div>
        <input className="search" type="text" placeholder="Search..." />
        <button className="search-button" type="submit">
          <img src="/images/search.png" alt="" />
        </button>
      </div>
      <button className="cart-button" onClick={() => redirectpage()}>
        <img src="/images/cart.png" alt="" /> Cart
      </button>
    </nav>
  );
}

export default Navbar;
