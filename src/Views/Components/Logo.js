import React from 'react';
import { Link } from 'react-router-dom';

function Logo(onClick = () => { }) {
  return (
    <Link to='/'>
      <h1
        className='logo'
        onClick={onClick}
      >
        <span className='start-text'>Net</span><span className='end-text'>Prime</span>
      </h1>
    </Link>
  );
};

export default Logo;