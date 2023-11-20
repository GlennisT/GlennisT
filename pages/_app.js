// import '@/styles/globals.css'
// import '../styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import { CartProvider } from '@/contexts/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;



