import React from 'react';

function Logo( onClick=() => {} ) {
  return (
    <h1 
      className='logo'
      onClick={ onClick }
    >
      <span className='start-text'>Net</span><span className='end-text'>Prime</span>
    </h1>
  ); 
};

export default Logo;