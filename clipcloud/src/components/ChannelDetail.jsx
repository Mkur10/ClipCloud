import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { fetchFromAPI } from '../utils/fetchfromAPI';

const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] = useState();
  const [Videoss, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchapi = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      console.log(data);
      setChannelDetail(data?.items[0]);


      const videodata = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      console.log(videodata)
      setVideos(videodata?.items);
      console.log(Videoss)
    }
    fetchapi();
  }, [id]);

  return (
    <div style={{ minHeight: '95vh' }}>
      <div>
        <div style={{
          height: '300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
        <ChannelCard channelDetail={ChannelDetail} marginTop='-110px' />
      </div>
      <div style={{ display: 'flex', padding: '2px' }}>
        <div style={{marginRight:'100px'}}/>
          <Videos videos={Videoss} />
        
      </div>
    </div>
  )
}

export default ChannelDetail