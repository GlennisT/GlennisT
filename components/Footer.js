

import React, { useState } from 'react';
import { FaUserCircle, FaSignInAlt, FaUserPlus, FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import AuthComponent from './FirebaseAuth';
const Footer = () => {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div className="relative"> {/* Relative positioning to ensure our modal is positioned relative to Navbar */}
      <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Glennis</h1>
            <div className="flex items-center space-x-4">
              {/* <button className="flex items-center space-x-2" onClick={() => setShowAuth(true)}> */}
                {/* <FaSignInAlt className="text-xl" /> */}

                <FaInstagramSquare />
                <span>Instagram</span>
                <FaFacebook />
                <span>Facebook</span>
                <FaTwitter />
                <span>Twitter</span>
                
                {/* <span>Login</span> */}
              {/* </button> */}
              {/* <button className="flex items-center space-x-2" onClick={() => setShowAuth(true)}>
                <FaUserPlus className="text-xl" />
                <span>Signup</span>
              </button> */}
            </div>
          </div>
        </div>
      </nav>

      {/* {showAuth && <AuthComponent onClose={() => setShowAuth(false)} />} */}
    </div>
  );
};

export default Footer;
