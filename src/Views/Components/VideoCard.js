import React from 'react';
import { Card } from 'antd';
import { CloudDownloadOutlined } from '@ant-design/icons' 

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
        <a href={video}>
          <CloudDownloadOutlined key={`ply__${name}`} />
        </a>
      ]}
    >
      <Meta 
        title={name}
      />
    </Card>
  );
};

export default VideoCard;