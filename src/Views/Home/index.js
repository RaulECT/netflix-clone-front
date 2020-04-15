import React from 'react';
import { Layout, Button } from 'antd';

import Logo from '../Components/Logo';
const { Header } = Layout;
require( './home.css' );

function Home() {
  return(
    <main className='home'>
      <Header className='header'>
        <Logo />
        <Button>Iniciar Sesión</Button>
      </Header>

      <section className='home__presentation'>
        <h1 className='title'>Un mundo de películas y serie como nunca antes viste.</h1>
        <h3 className='subtitle'>Entrenimiento sin fin a un click de distancia, no dudes mas.</h3>
        <Button 
          className='sign-button'
          size='large'
        >
          Quiero unirme
        </Button>
      </section>
    </main>
  )
};

export default Home;