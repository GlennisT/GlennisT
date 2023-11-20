import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, where, onSnapshot } from 'firebase/firestore';

const Reviews = ({ productId }) => {
    const [reviews, setReviews] = useState([]);
    const db = getFirestore();

    useEffect(() => {
        const q = query(collection(db, 'reviews'), where('productId', '==', productId));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const reviewsArray = querySnapshot.docs.map(doc => doc.data());
            setReviews(reviewsArray);
        });

        return () => unsubscribe();
    }, [productId]);

    return (
        <div>
            {reviews.map((review, index) => (
                <div key={index}>
                    <p>{review.reviewText}</p>
                </div>
            ))}
        </div>
    );
};

export default Reviews;
