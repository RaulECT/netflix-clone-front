import React from 'react';
import { Link } from 'react-router-dom'

import Form from './Form'

function Content(){

  return(
    <section className='content'>
      <p className='content__login'>
        ¿Aun no eres parte de nosotros? <Link to='/signin'>Unete</Link>
      </p>

      <Form />
    </section>
  )
};

export default Content;