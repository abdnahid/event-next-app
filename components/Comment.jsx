import React, { useRef } from 'react';
import { useRouter } from 'next/router';

const Comment = () => {
  const ratingRef = useRef(null);
  const commentRef = useRef(null);
  const router = useRouter();
  const eventId = router.query.id;
  const submitComment = async (e) => {
    e.preventDefault();
    if (ratingRef && commentRef) {
      const response = await fetch(`/api/events/${eventId}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: eventId,
          rating: ratingRef.current.value,
          comment: commentRef.current.value,
        }),
      });
      const data = await response.json();
      console.log(data);
    } else {
      alert('Please add rating and details');
    }
  };
  return (
    <form onSubmit={submitComment}>
      <label htmlFor='rating'>Rating</label>
      <select ref={ratingRef} name='rating' id='rating'>
        <option value={5}>Excellent!</option>
        <option value={4}>Above average</option>
        <option value={3}>Average</option>
        <option value={2}>Poor</option>
        <option value={1}>Very Poor</option>
      </select>
      <label htmlFor='comment'>Describe in details</label>
      <textarea
        name='comment'
        id='comment'
        rows='10'
        ref={commentRef}
        placeholder='Describe in details'
      ></textarea>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Comment;
