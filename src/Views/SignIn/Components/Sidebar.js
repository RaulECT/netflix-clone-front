import React from 'react';

import Logo from '../../Components/Logo';

function Sidebar(){

  return(
    <section className='signin__sidebar'>
      <Logo />
      <h1 className='signin__quote'>Vive experiencias inimaginables con nuestro amplio catalogo.</h1>
    </section>
  );
};

export default Sidebar;