// import React from 'react';

// const ProductTile = ({ product }) => {
//   const { ProductName, ProductImageUrl, Price, link } = product;

//   const handleJumpToLocation = () => {
//     // Implement the jump to location functionality later
//     console.log('Jump to coordinates:', link);
//   };

//   return (
//     <div className="group">
//       <div className="bg-white shadow-md rounded p-4 m-4">
//         <img src={ProductImageUrl} alt={ProductName} className="w-full h-48 object-cover mb-4" />
//         <div>
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">{ProductName}</h3>
//           <p className="text-lg font-bold text-gray-800 mb-2">{Price}</p>
//           <p className="text-gray-600 mb-4">Coordinates: {link}</p>
//           <button
//             onClick={handleJumpToLocation}
//             className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded relative"
//           >
//             Jump to Location
//             {/* <span className="absolute -bottom-8 left-0 text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded hidden group-hover:block">
//               {coordinates}
//             </span> */}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductTile;


import React from 'react';
import { useCart } from '@/contexts/CartContext';
const JewelryTile = ({ jewelry }) => {
  const { JewelryName, JewelryImageUrl, Price, Description } = jewelry;
  const { addToCart } = useCart(); // Use the addToCart function from context

  const handleAddToCart = () => {
    addToCart(jewelry);
  };

  return (
    <div className="group">
      <div className="bg-white shadow-md rounded p-4 m-4">
        <img src={JewelryImageUrl} alt={JewelryName} className="w-full h-48 object-cover mb-4" />
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{JewelryName}</h3>
          <p className="text-lg font-bold text-gray-800 mb-2">${Price}</p>
          <p className="text-gray-600 mb-4">{Description}</p>
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default JewelryTile;
