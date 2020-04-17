import React from 'react';
import { Button } from 'antd'

const defaultVideo = {
  "_id": "5e95054545d962083dfdc14d",
  "name": "Movie 1",
  "image_cover_uri": "https://res.cloudinary.com/dmclfzpce/image/upload/v1586825716/mjxx8bnfxalariwd0wxg.jpg",
  "trailer_uri": "https://res.cloudinary.com/dmclfzpce/video/upload/v1586825780/mbbqnn3oxrekqg4mpqv9.mov",
  "rating": 0
}

function Recomendation({ video = defaultVideo }){
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