import React from 'react';
import OrderHistory from '../components/OrderHistory';
import { useAuth } from './auth'; // Adjust import path

const OrderHistoryPage = () => {
  const { currentUser } = useAuth(); // Fetch the current user

  return (
    <div>
      <h1>Your Order History</h1>
      {currentUser ? (
        <OrderHistory userId={currentUser.uid} />
      ) : (
        <p>Please log in to view your order history.</p>
      )}
    </div>
  );
};

export default OrderHistoryPage;
