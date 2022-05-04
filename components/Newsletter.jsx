import React, { useRef } from 'react';
import { useRouter } from 'next/router';

const Newsletter = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const router = useRouter();
  const eventId = router.query.id;
  const submitNewsletter = async (e) => {
    e.preventDefault();
    if (nameRef && emailRef) {
      const response = await fetch(`/api/events/${eventId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
        }),
      });
      const data = await response.json();
      console.log(data);
    } else {
      alert('Please add name and email');
    }
  };
  return (
    <form onSubmit={submitNewsletter}>
      <label htmlFor='name'>Your Name</label>
      <input
        type='text'
        name='name'
        id='name'
        ref={nameRef}
        placeholder='Enter your name'
      />
      <label htmlFor='email'>Your Email</label>
      <input
        type='email'
        name='email'
        id='email'
        ref={emailRef}
        placeholder='Enter your email'
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Newsletter;
