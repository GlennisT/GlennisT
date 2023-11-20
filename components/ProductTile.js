

// import React from 'react';
// import { useCart } from '@/contexts/CartContext';
// import ReviewForm from './ReviewForm';
// import Reviews from './Reviews';
// const JewelryTile = ({ jewelry }) => {
//   const { JewelryName, JewelryImageUrl, Price, Description } = jewelry;
//   const { addToCart } = useCart(); // Use the addToCart function from context

//   const handleAddToCart = () => {
//     addToCart(jewelry);
//   };

//   return (
//     <div className="group">
//       <div className="bg-white shadow-md rounded p-4 m-4">
//         <img src={JewelryImageUrl} alt={JewelryName} className="w-full h-48 object-cover mb-4" />
//         <div>
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">{JewelryName}</h3>
//           <p className="text-lg font-bold text-gray-800 mb-2">KSH{Price}</p>
//           <p className="text-gray-600 mb-4">{Description}</p>
//           <button
//             onClick={handleAddToCart}
//             className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//       <div>
//                 <ReviewForm productId={jewelry.id} />
//                 <Reviews productId={jewelry.id} />
//             </div>
//     </div>
//   );
// };

// export default JewelryTile;

import React from 'react';
import { useCart } from '@/contexts/CartContext';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

const JewelryTile = ({ jewelry }) => {
  const { JewelryName, JewelryImageUrl, Price, Description } = jewelry;
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(jewelry);
  };

  return (
    <div className="group">
      <div className="bg-white shadow-md rounded p-4 m-4">
        <img src={JewelryImageUrl} alt={JewelryName} className="w-full h-48 object-cover mb-4" />
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{JewelryName}</h3>
          <p className="text-lg font-bold text-gray-800 mb-2">KSH{Price}</p>
          <p className="text-gray-600 mb-4">{Description}</p>
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-6 p-4 border-t border-gray-200">
        <h4 className="text-lg font-semibold mb-3">Customer Reviews</h4>
        <ReviewForm productId={jewelry.id} />
        <div className="mt-4">
          <Reviews productId={jewelry.id} />
        </div>
      </div>
    </div>
  );
};

export default JewelryTile;

