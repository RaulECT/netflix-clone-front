import React from 'react';
import { Card } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons' 

const { Meta } = Card;

function VideoCard({ video, cover, name }) {

  return (
    <Card
      style={{ width: 200 }}
      cover={
        <img
          alt={name}
          src={cover}
        />
      }
      actions={[
        <PlayCircleOutlined key={`ply__${name}`} />
      ]}
    >
      <Meta 
        title={name}
      />
    </Card>
  );
};

export default VideoCard;