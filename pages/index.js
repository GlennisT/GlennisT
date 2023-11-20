import React, { useState } from 'react';
import Head from 'next/head';
import SearchBar from '../components/SearchBar';
import ProductTile from '../components/ProductTile';
import Navbar from '../components/Navbar';
import JewelryTile from '../components/ProductTile';
import Footer from '@/components/Footer';

const Home = () => {

  // const [products, setProducts] = useState([]);
  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     name: 'Dummy Product 1',
  //     imageURL: 'https://via.placeholder.com/300',
  //     price: 99.99,
  //     coordinates: '12.34, 56.78',
  //   },
  //   {
  //     id: 2,
  //     name: 'Dummy Product 2',
  //     imageURL: 'https://via.placeholder.com/300',
  //     price: 149.99,
  //     coordinates: '98.76, 54.32',
  //   },
  //   {
  //     id: 3,
  //     name: 'Dummy Product 3',
  //     imageURL: 'https://via.placeholder.com/300',
  //     price: 49.99,
  //     coordinates: '34.56, 78.90',
  //   },
  // ]);
  const [products, setProducts] = useState([
    {
      id: 1,
      JewelryName: 'Elegant Gold Necklace',
      JewelryImageUrl: '/l1.jpeg',
      Price: 9023.34,
      Description: 'An elegant gold necklace perfect for special occasions.',
    },
    {
      id: 2,
      JewelryName: 'Silver Stud Earrings',
      JewelryImageUrl: '/l2.jpeg',
      Price: 5489.34,
      Description: 'Chic silver stud earrings with intricate design.',
    },
    {
      id: 3,
      JewelryName: 'Diamond Ring',
      JewelryImageUrl: '/l3.jpeg',
      Price: 2039.23,
      Description: 'A beautiful diamond ring to adorn your fingers.',
    },
    {
      id: 4,
      JewelryName: 'Diamond Ring',
      JewelryImageUrl: '/l4.jpeg',
      Price: 2038.34,
      Description: 'A beautiful diamond ring to adorn your fingers.',
    },
    {
      id: 5,
      JewelryName: 'Diamond Ring',
      JewelryImageUrl: '/l5.jpeg',
      Price: 2993.34,
      Description: 'A beautiful diamond ring to adorn your fingers.',
    },
    {
      id: 6,
      JewelryName: 'Diamond Ring',
      JewelryImageUrl: '/l6.jpeg',
      Price: 2983.34,
      Description: 'A beautiful diamond ring to adorn your fingers.',
    },
    {
      id: 7,
      JewelryName: 'Diamond Ring',
      JewelryImageUrl: '/l7.jpeg',
      Price: 3201.23,
      Description: 'A beautiful diamond ring to adorn your fingers.',
    },
    {
      id: 8,
      JewelryName: 'Diamond Ring',
      JewelryImageUrl: '/l8.jpeg',
      Price: 2992.43,
      Description: 'A beautiful diamond ring to adorn your fingers.',
    },
    {
      id: 9,
      JewelryName: 'Diamond Ring',
      JewelryImageUrl: '/l9.jpeg',
      Price: 9923.89,
      Description: 'A beautiful diamond ring to adorn your fingers.',
    },
    {
      id: 10,
      JewelryName: 'Diamond Ring',
      JewelryImageUrl: '/l10.jpeg',
      Price: 3902.23,
      Description: 'A beautiful diamond ring to adorn your fingers.',
    },
    {
      id: 11,
      JewelryName: 'Diamond Ring',
      JewelryImageUrl: '/l11.jpeg',
      Price: 2000.00,
      Description: 'A beautiful diamond ring to adorn your fingers.',
    },
    {
      id: 12,
      JewelryName: 'Diamond Ring',
      JewelryImageUrl: '/l12.jpeg',
      Price: 1000.00,
      Description: 'A beautiful diamond ring to adorn your fingers.',
    },
    {
      id: 13,
      JewelryName: 'Diamond Ring',
      JewelryImageUrl: '/l13.jpeg',
      Price: 2932.89,
      Description: 'A beautiful diamond ring to adorn your fingers.',
    },
    {
      id: 14,
      JewelryName: 'Diamond Ring',
      JewelryImageUrl: '/l14.jpeg',
      Price: 9823.89,
      Description: 'A beautiful diamond ring to adorn your fingers.',
    },
    {
      id: 15,
      JewelryName: 'Diamond Ring',
      JewelryImageUrl: '/l15.jpeg',
      Price: 2903.98,
      Description: 'A beautiful diamond ring to adorn your fingers.',
    },
    {
      id: 16,
      JewelryName: 'Diamond Ring',
      JewelryImageUrl: '/l16.jpeg',
      Price: 4000.34,
      Description: 'A beautiful diamond ring to adorn your fingers.',
    },
    {
      id: 17,
      JewelryName: 'Diamond Ring',
      JewelryImageUrl: '/l17.jpeg',
      Price: 1049.99,
      Description: 'A beautiful diamond ring to adorn your fingers.',
    },
    
  ]);
  

const searchProducts = async (query) => {
  try {
    const response = await fetch(`YOUR_API_URL_HERE?query=${query}`);
    const data = await response.json();
    setProducts(data);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <>
     <Navbar />

    <div className="container mx-auto px-4">
      <Head>
        {/* ... */}
      </Head>
      <SearchBar onSearch={searchProducts} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {products.map((product) => (
          <ProductTile key={product.id} product={product} />
        ))} */}
        {products.map((product) => (
  <JewelryTile key={product.id} jewelry={product} />
))}

      </div>
    </div>
    <Footer />
    </>
  );
        }
export default Home;

// import React, { useState } from 'react';
// import Head from 'next/head';
// import SearchBar from '../components/SearchBar';
// import ProductTile from '../components/ProductTile';
// import Navbar from '../components/Navbar';

// const Home = () => {
//   const [products, setProducts] = useState([]);

//   const searchProducts = async (query) => {
//     try {
//       const response = await fetch('http://localhost:8000/api/chatbot/ask/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ question: query }),
//       });
//       const data = await response.json();
//       console.log(response)
//       setProducts(data.answer);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4">
//         <Head>{/* ... */}</Head>
//         <SearchBar onSearch={searchProducts} />
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {products.map((product, index) => (
//             <ProductTile key={index} product={product} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

