import React from 'react';

import Recomendations from './Components/Recomendation'
import './video-content.css'

const videos = [
  {
    "_id": "5e8e80831525fc11d5187e2c",
    "name": "Movie 1",
    "image_cover_uri": "aksjdhaksjdhaskjdhakh",
    "trailer_uri": "asjdhaksjdhaskjd",
    "rating": 1.7708333333333335
  },
  {
    "_id": "5e95054545d962083dfdc14d",
    "name": "Movie 1",
    "image_cover_uri": "https://res.cloudinary.com/dmclfzpce/image/upload/v1586825716/mjxx8bnfxalariwd0wxg.jpg",
    "trailer_uri": "https://res.cloudinary.com/dmclfzpce/video/upload/v1586825780/mbbqnn3oxrekqg4mpqv9.mov",
    "rating": 0
  },
]

function VideoContent() {

  return (
    <section className='video-content'>
      <Recomendations video={videos[1]} />
      <p>sadas</p>
      <p>sadas</p>
      <p>sadas</p>
      <p>sadas</p>
      <p>sadas</p>
      <p>sadas</p>
      <p>sadas</p>
    </section>
  );
}

export default VideoContent;