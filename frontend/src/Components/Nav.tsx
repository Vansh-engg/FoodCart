import Button from "./Button";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function Nav() {
  const { cart } = useCart();

  return (
    <nav className="text-black px-6 py-4 sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-600">MyApp</h1>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 font-bold">
          <li>
            <Link
              to="/"
              className="px-4 py-2 rounded-full bg-white hover:bg-orange-500"
            >
              Home
            </Link>
          </li>
          {/* 
          <li>
            <a
              href="#about"
              className="px-4 py-2 rounded-full bg-white hover:bg-orange-500"
            >
              About
            </a>
          </li> */}

          <li>
            <Link
              to="/menu"
              className="px-4 py-2 rounded-full bg-white hover:bg-orange-500"
            >
              Menu
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="px-4 py-2 rounded-full bg-white hover:bg-orange-500"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-full bg-white hover:bg-orange-500"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Button */}
        <Button className="font-bold" label="Login" />

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer">☰</div>
      </div>
    </nav>
  );
}

export default Nav;
