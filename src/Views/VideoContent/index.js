import React from 'react';
import authHOC from '../../utils/authHOC';

import Recomendations from './Components/Recomendation';
import VideosList from '../Components/VideosList';
import './video-content.css'

const videos = [
  {
    "_id": "5e95054545d962083dfdc14d",
    "name": "Movie 1",
    "image_cover_uri": "https://res.cloudinary.com/dmclfzpce/image/upload/v1586825716/mjxx8bnfxalariwd0wxg.jpg",
    "trailer_uri": "https://res.cloudinary.com/dmclfzpce/video/upload/v1586825780/mbbqnn3oxrekqg4mpqv9.mov",
    "rating": 0
  },
  {
    "_id": "5e95054545d962083dfdc14d",
    "name": "Movie 1",
    "image_cover_uri": "https://res.cloudinary.com/dmclfzpce/image/upload/v1586825716/mjxx8bnfxalariwd0wxg.jpg",
    "trailer_uri": "https://res.cloudinary.com/dmclfzpce/video/upload/v1586825780/mbbqnn3oxrekqg4mpqv9.mov",
    "rating": 0
  },
  {
    "_id": "5e95054545d962083dfdc14d",
    "name": "Movie 1",
    "image_cover_uri": "https://res.cloudinary.com/dmclfzpce/image/upload/v1586825716/mjxx8bnfxalariwd0wxg.jpg",
    "trailer_uri": "https://res.cloudinary.com/dmclfzpce/video/upload/v1586825780/mbbqnn3oxrekqg4mpqv9.mov",
    "rating": 0
  },
  {
    "_id": "5e95054545d962083dfdc14d",
    "name": "Movie 1",
    "image_cover_uri": "https://res.cloudinary.com/dmclfzpce/image/upload/v1586825716/mjxx8bnfxalariwd0wxg.jpg",
    "trailer_uri": "https://res.cloudinary.com/dmclfzpce/video/upload/v1586825780/mbbqnn3oxrekqg4mpqv9.mov",
    "rating": 0
  },
  {
    "_id": "5e95054545d962083dfdc14d",
    "name": "Movie 1",
    "image_cover_uri": "https://res.cloudinary.com/dmclfzpce/image/upload/v1586825716/mjxx8bnfxalariwd0wxg.jpg",
    "trailer_uri": "https://res.cloudinary.com/dmclfzpce/video/upload/v1586825780/mbbqnn3oxrekqg4mpqv9.mov",
    "rating": 0
  },
  {
    "_id": "5e95054545d962083dfdc14d",
    "name": "Movie 1",
    "image_cover_uri": "https://res.cloudinary.com/dmclfzpce/image/upload/v1586825716/mjxx8bnfxalariwd0wxg.jpg",
    "trailer_uri": "https://res.cloudinary.com/dmclfzpce/video/upload/v1586825780/mbbqnn3oxrekqg4mpqv9.mov",
    "rating": 0
  },
  {
    "_id": "5e95054545d962083dfdc14d",
    "name": "Movie 1",
    "image_cover_uri": "https://res.cloudinary.com/dmclfzpce/image/upload/v1586825716/mjxx8bnfxalariwd0wxg.jpg",
    "trailer_uri": "https://res.cloudinary.com/dmclfzpce/video/upload/v1586825780/mbbqnn3oxrekqg4mpqv9.mov",
    "rating": 0
  },
  {
    "_id": "5e95054545d962083dfdc14d",
    "name": "Movie 1",
    "image_cover_uri": "https://res.cloudinary.com/dmclfzpce/image/upload/v1586825716/mjxx8bnfxalariwd0wxg.jpg",
    "trailer_uri": "https://res.cloudinary.com/dmclfzpce/video/upload/v1586825780/mbbqnn3oxrekqg4mpqv9.mov",
    "rating": 0
  },
  {
    "_id": "5e95054545d962083dfdc14d",
    "name": "Movie 1",
    "image_cover_uri": "https://res.cloudinary.com/dmclfzpce/image/upload/v1586825716/mjxx8bnfxalariwd0wxg.jpg",
    "trailer_uri": "https://res.cloudinary.com/dmclfzpce/video/upload/v1586825780/mbbqnn3oxrekqg4mpqv9.mov",
    "rating": 0
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
      <VideosList videos={videos} title='Nuestro catalogo' />
    </section>
  );
}

export default authHOC(VideoContent);