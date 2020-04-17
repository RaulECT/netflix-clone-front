import React, { useEffect, useState } from 'react';
import authHOC from '../../utils/authHOC';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { Skeleton } from 'antd';

import VideosList from '../Components/VideosList';

const MOVIES = gql`
  query getAllMovies {
    getMovies {
      _id
      name
      video_uri
      image_cover_uri
      trailer_uri
    }
  }
`

function Movies() {
  const { loading, data } = useQuery(MOVIES);
  const [ movies, updateMovies ] = useState([]);

  useEffect( () => {
    if ( data ) {
      updateMovies( data.getMovies )
    }    
  }, [data] )

  return (
    <Skeleton active loading={ loading }>
      <section>
        <VideosList videos={movies} title='Peliculas' />
      </section>
    </Skeleton>
  );
}

export default authHOC(Movies);