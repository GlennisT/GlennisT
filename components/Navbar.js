

// import React from 'react';
// import { FaUserCircle, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

// const Navbar = () => {
//   return (
//     <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Daaamn</h1>
//           <div className="flex items-center space-x-4">
//             <button className="flex items-center space-x-2">
//               <FaSignInAlt className="text-xl" />
//               <span>Login</span>
//             </button>
//             <button className="flex items-center space-x-2">
//               <FaUserPlus className="text-xl" />
//               <span>Signup</span>
//             </button>
//             {/* Uncomment the below lines if you want to show user profile icon when logged in */}
//             {/* <button className="flex items-center space-x-2">
//               <FaUserCircle className="text-xl" />
//               <span>Profile</span>
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { FaUserCircle, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
// import AuthComponent from './FirebaseAuth';
// const Navbar = () => {
//   const [showAuth, setShowAuth] = useState(false);

//   // if (showAuth) {
//   //   return (
//   //     <div className="container mx-auto p-4">
//   //       <AuthComponent />
//   //       <button className="mt-4 bg-red-500 text-white rounded p-2" onClick={() => setShowAuth(false)}>Close</button>
//   //     </div>
//   //   );
//   // }
//   if (showAuth) {
//     return (
//       <div className="container mx-auto p-4">
//         <AuthComponent onClose={() => setShowAuth(false)} />
//       </div>
//     );
// }

//   return (
//     <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Daaamn</h1>
//           <div className="flex items-center space-x-4">
//             <button className="flex items-center space-x-2" onClick={() => setShowAuth(true)}>
//               <FaSignInAlt className="text-xl" />
//               <span>Login</span>
//             </button>
//             <button className="flex items-center space-x-2" onClick={() => setShowAuth(true)}>
//               <FaUserPlus className="text-xl" />
//               <span>Signup</span>
//             </button>
//             {/* Uncomment the below lines if you want to show user profile icon when logged in */}
//             {/* <button className="flex items-center space-x-2">
//               <FaUserCircle className="text-xl" />
//               <span>Profile</span>
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

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
            <h1 className="text-2xl font-bold">Daaamn</h1>
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
