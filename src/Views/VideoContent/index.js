import React, { useEffect, useState } from 'react';
import authHOC from '../../utils/authHOC';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { Skeleton } from 'antd'

import Recomendations from './Components/Recomendation';
import VideosList from '../Components/VideosList';
import './video-content.css'

const MOVIES = gql`
  query getAllVideos{
    getVideos {
      _id
      name
      image_cover_uri
      trailer_uri
      rating
    }
  }
`

const videos = [
  {
    "_id": "5e95054545d962083dfdc14d",
    "name": "Movie 1",
    "image_cover_uri": "https://res.cloudinary.com/dmclfzpce/image/upload/v1586825716/mjxx8bnfxalariwd0wxg.jpg",
    "trailer_uri": "https://res.cloudinary.com/dmclfzpce/video/upload/v1586825780/mbbqnn3oxrekqg4mpqv9.mov",
    "rating": 0
  },
]

function VideoContent() {
  const { loading, data } = useQuery(MOVIES);
  const [ allVideos, updateVideos ] = useState([]);

  useEffect( () => {
    if ( data ) {
      updateVideos( data.getVideos );
    }
  }, [data] )

  function getRandomVideo( v ) {
    if ( v.length !== 0 ) {
      const randomIndex = Math.floor( Math.random() * ( v.length ) );
      return v[randomIndex];
    }

    return videos[1]
  }

  return (
    <Skeleton active loading={loading}>
      <section className='video-content'>
        <Recomendations video={getRandomVideo(allVideos)} />
        <VideosList videos={allVideos} title='Nuestro catalogo' />
      </section>
    </Skeleton>
  );
}

export default authHOC(VideoContent);