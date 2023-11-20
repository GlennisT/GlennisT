// pages/auth.js
// import FirebaseAuth from '../components/FirebaseAuth';

// const AuthPage = () => {
//   return (
//     <div>
//       <h1>Authenticate</h1>
//       <FirebaseAuth />
//     </div>
//   );
// };

// export default AuthPage;



import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Link from 'next/link'; // Import Link from Next.js

// TODO: Replace with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBi_ECw0X4-JRHlsBXcTrWz-wxZ3gKBJ8",
    authDomain: "glennis-61555.firebaseapp.com",
    projectId: "glennis-61555",
    storageBucket: "glennis-61555.appspot.com",
    messagingSenderId: "735508623007",
    appId: "1:735508623007:web:210ba26e516ff962a83caa",
    measurementId: "G-Z6GR81C1QH"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function AuthComponent({ onClose }) {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleSignin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };


if (user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-2xl font-bold">Welcome, {user.email}!</p>
        <Link href="/order-history">
          <a className="text-blue-500 hover:text-blue-700">View Order History</a>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-4">
      <h2 className="text-3xl font-bold text-gray-700">Authentication</h2>

      {errorMessage && <p className="px-4 py-2 bg-red-500 text-white rounded">{errorMessage}</p>}

      <div className="w-1/3 space-y-2">
        <div className="flex flex-col space-y-1">
          <label className="font-medium text-gray-700" htmlFor="email">Email:</label>
          <input className="px-3 py-2 border rounded" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>

        <div className="flex flex-col space-y-1">
          <label className="font-medium text-gray-700" htmlFor="password">Password:</label>
          <input className="px-3 py-2 border rounded" type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
      </div>

      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleSignup}>Sign Up</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={handleSignin}>Sign In</button>
      </div>
    </div>
  );
}

export default AuthComponent;


