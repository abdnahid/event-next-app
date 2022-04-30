import React, { useState } from 'react';

const SearchEvents = ({ onSearch }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const [state, setState] = useState({ month: '', year: '2021' });
  const handleChange = (e) => {
    setState((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    onSearch(state.month, state.year);
  };
  return (
    <form onSubmit={submitHandle} className='grid grid-cols-5 gap-1'>
      <div className='grid-col-span-2 input-box'>
        <select name='month' id='month' onChange={handleChange}>
          {months.map((month, index) => (
            <option key={index + 1} value={month.substring(0, 3)}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <div className='grid-col-span-2 input-box'>
        <select name='year' id='year' onChange={handleChange}>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
        </select>
      </div>
      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchEvents;
