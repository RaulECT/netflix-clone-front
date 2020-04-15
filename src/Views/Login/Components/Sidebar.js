import React from 'react';

import Logo from '../../Components/Logo';

function Sidebar(){

  return(
    <section className='login__sidebar'>
      <Logo />
      <h1 className='login__quote'>Vive experiencias inimaginables con nuestro amplio catalogo.</h1>
    </section>
  );
};

export default Sidebar;