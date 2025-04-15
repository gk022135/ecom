import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function NavBar() {
  const cart = useSelector((state) => state.cart || []);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    // Sum the total quantity from all cart items
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    setQuantity(total);
  }, [cart]);

  return (
    <nav className="bg-slate-800 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left side - Brand or Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-indigo-300 transition"
        >
          🛍️ MyShop
        </NavLink>

        {/* Right side - Links */}
        <div className="flex space-x-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 hover:text-indigo-300 transition ${
                isActive ? "text-indigo-400 font-semibold" : ""
              }`
            }
          >
            <FaHome />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative flex items-center gap-2 hover:text-indigo-300 transition ${
                isActive ? "text-indigo-400 font-semibold" : ""
              }`
            }
          >
            <FaShoppingCart />
            <span>Cart</span>
            {quantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {quantity}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
