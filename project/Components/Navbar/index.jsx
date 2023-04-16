import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="bg-white shadow-navbar h-16">
      <div className="pl-10 pr-10 mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" legacyBehavior>
          <a className="flex-shrink-0 text-3xl font-bold text-gray-900 cursor-pointer">
          <span className="text-cyan">H</span>appyMall
          </a>
        </Link>
        <div className="flex-grow">
          <ul className="flex items-center justify-center space-x-10 text-lg">
            
          </ul>
        </div>
        <div className="flex-shrink-0">
          <Link href="/cart" legacyBehavior>
          <FaShoppingCart className="hover:animate-bounce text-black text-2xl transition duration-300 ease-in-out hover:text-gray-500 hover:cursor-pointer" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
