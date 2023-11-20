

import React, { useState } from 'react';
import { FaUserCircle, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import AuthComponent from './FirebaseAuth';
import { useCart } from '@/contexts/CartContext';
const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false);
  const { cartItems } = useCart();

  return (
    <div className="relative"> {/* Relative positioning to ensure our modal is positioned relative to Navbar */}
      <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Glennis</h1>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2" onClick={() => setShowAuth(true)}>
                <FaSignInAlt className="text-xl" />
                <span>Login</span>
              </button>
              <button className="flex items-center space-x-2" onClick={() => setShowAuth(true)}>
                <FaUserPlus className="text-xl" />
                <span>Signup</span>
              </button>
            </div>
          </div>
        </div>
        <div>
        Cart Items: {cartItems.length}
      </div>
      </nav>

      {showAuth && <AuthComponent onClose={() => setShowAuth(false)} />}
    </div>
  );
};

export default Navbar;
