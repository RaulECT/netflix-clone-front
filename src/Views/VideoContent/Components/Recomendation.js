import React from 'react';
import { Button } from 'antd'

function Recomendation({ video }){
  const { trailer_uri, image_cover_uri, name } = video;

  return (
    <div className='recomendation'>
      <video autoPlay muted loop className='video-content__trailer'>
        <source src={trailer_uri} />
      </video>

      <div className='video-content__selection-info'>
        <figure>
          <img src={image_cover_uri} alt={name} />
        </figure>

        <div>
          <h1>{name}</h1>
          <Button className='view-button' size='large'>Ver ahora</Button>
        </div>
      </div>
    </div>
  );
}

export default Recomendation