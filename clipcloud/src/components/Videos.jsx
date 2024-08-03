import React from 'react'
import { Box, Stack } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({videos,direction}) => {
 
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
    <div className='videosdisplay'>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))
      }
    </div>
    </Stack>
  )
}

export default Videos