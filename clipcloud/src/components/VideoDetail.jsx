import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Videos from "./Videos";
import { fetchFromAPI } from '../utils/fetchfromAPI';
import { Typography, Box, Stack } from "@mui/material";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const {id} =useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);
  const title = videoDetail?.snippet?.title || 'Loading....';
  const channelId = videoDetail?.snippet?.channelId || 'Loading....';
  const channelTitle = videoDetail?.snippet?.channelTitle || 'Loading....';
  const viewCount = videoDetail?.statistics?.viewCount || 'Loading....';
  const likeCount = videoDetail?.statistics?.likeCount || 'Loading....';
  return  (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <div style={{display:'flex',flex:'1'}}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </div>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail