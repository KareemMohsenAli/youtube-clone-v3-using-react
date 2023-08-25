import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromApi";
import Videos from "./Videos";

function VideoDetail() {
  const [videoDetails, setVidoeDetails] = useState("");
  const [relatedVideos, setRelatedVideos] = useState([])
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=contentDetails,statistics&id=${id}`).then(
      (data) => setVidoeDetails(data?.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRelatedVideos(data?.items)
    );

  }, [id]);

  // Check if videoDetails is null or undefined before destructuring its properties
  if (!videoDetails) {
    return <div>Loading...</div>;
  }

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetails;
  console.log(title);
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ widows: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            <Typography fontWeight="bold" p={1} color="#fff">
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link
                className="text-decoration-none"
                to={`/channel/${channelId}`}
              >
                <Typography
                  color="#fff"
                  variant={{ sm: "subtitle1", md: "h6" }}
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: 12, color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
              <Typography variant="body1" sx={{opacity:0.7}}>
                  {parseInt(likeCount).toLocaleString()} Likes

                </Typography>
                <Typography variant="body1" sx={{opacity:0.7}}>
                  {parseInt(viewCount).toLocaleString()} Views

                </Typography>
                
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems="center" >
        <Videos direction="column" medum="260" videos={relatedVideos} />

      </Box>
      </Stack>
    
    </Box>
  );
}

export default VideoDetail;
