import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const db = getFirestore();

export const fetchOrdersForUser = async (userId) => {
  const ordersRef = collection(db, 'orders');
  const q = query(ordersRef, where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  const orders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return orders;
};
