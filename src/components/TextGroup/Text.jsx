import React from 'react';
import './style.css'
const Text = ({ text }) => {
  return (
    <div className='text'>
      <p>{text}</p>
    </div>
  );
};

export default Text;
