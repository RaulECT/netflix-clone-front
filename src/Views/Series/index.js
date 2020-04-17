import React, { useState, useEffect } from 'react';
import authHOC from '../../utils/authHOC';
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag'
import { Skeleton } from 'antd'

import VideoList from '../Components/VideosList';

const SERIES = gql`
  query getAllSeries{
    getSeries {
      _id
      name
      image_cover_uri
    }
  }
`

function Series() {
  const { loading, data } = useQuery(SERIES);
  const [series, updateSeries] = useState([]);

  useEffect(() => {
    if (data) {
      updateSeries(data.getSeries)
    }
  }, [data])

  return (
    <Skeleton active loading={loading}>
      <section>
        <VideoList videos={series} title='Series' />
      </section>
    </Skeleton>
  )
}

export default authHOC(Series);