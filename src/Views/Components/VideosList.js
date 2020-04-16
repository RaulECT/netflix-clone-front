import React from 'react';
import { Divider } from 'antd'

import VideoCard from './VideoCard';

function VideoList({videos, title}) {
  const videoCards = videos.map( ({ _id, name, image_cover_uri }) => 
    <VideoCard 
      key={`vc__${_id}`} 
      cover={image_cover_uri} 
      name={name} 
    /> );

  return (
    <>
      <Divider orientation='left'>{title}</Divider>
      <section className='video-list'>
        { videoCards }
      </section>
    </>
  );
};

export default VideoList;