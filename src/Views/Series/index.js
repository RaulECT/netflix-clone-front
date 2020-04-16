import React from 'react';

import VideoList from '../Components/VideosList';

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

function Series() {

  return (
    <section>
      <VideoList videos={videos} title='Series' />
    </section>
  )
}

export default Series;