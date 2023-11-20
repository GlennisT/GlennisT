import React, { useState, useEffect } from 'react';
import { fetchOrdersForUser } from './firebase'; // Adjust the import path as necessary

const OrderHistory = ({ userId }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userOrders = await fetchOrdersForUser(userId);
        setOrders(userOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    if (userId) {
      fetchOrders();
    }
  }, [userId]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-200 rounded">
            <p><strong>Date:</strong> {new Date(order.date.seconds * 1000).toLocaleDateString()}</p>
            <p><strong>Total Cost:</strong> KSH{order.totalCost}</p>
            {/* Render other order details as needed */}
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;
