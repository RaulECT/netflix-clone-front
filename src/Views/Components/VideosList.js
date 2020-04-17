import React from 'react';
import { Divider, Result } from 'antd'

import VideoCard from './VideoCard';

function VideoList({ videos, title }) {
  const videoCards = videos.map(({ _id, name, image_cover_uri }) =>
    <VideoCard
      key={`vc__${_id}`}
      cover={image_cover_uri}
      name={name}
    />);

  return videos.length !== 0
    ? (
      <>
        <Divider orientation='left'>{title}</Divider>
        <section className='video-list'>
          {videoCards}
        </section>
      </>
    )
    : (
      <Result 
        status='404'
        title='Ups, no tenemos ninguna serie :('
        subTitle='Por el momento no tenemos series listadas, date tu vuelta luego.'
      />
    )

  // return (
    
  // );
};

export default VideoList;