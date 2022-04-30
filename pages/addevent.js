import React, { useState } from 'react';

const Addevent = () => {
  const [state, setState] = useState({ name: '', email: '' });
  const [resData, setResData] = useState('');
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/addevent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    });
    const data = await response.json();
    setResData(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Enter your name'
          onChange={handleChange}
        />
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Enter your email'
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
      <div>response: {resData.message}</div>
    </>
  );
};

export default Addevent;
