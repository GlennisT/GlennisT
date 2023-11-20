import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const ReviewForm = ({ productId }) => {
    const [review, setReview] = useState('');
    const db = getFirestore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (review.trim() === '') return;

        try {
            await addDoc(collection(db, 'reviews'), {
                productId,
                reviewText: review,
                createdAt: new Date()
            });
            setReview('');
        } catch (err) {
            console.error('Error adding review: ', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write a review"
            />
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
