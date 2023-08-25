import { Box, Stack } from "@mui/material";
import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

function Videos({ videos,medum ,direction}) {
  console.log(videos);
  return (
    <Stack direction={direction||"row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {videos&&videos.map((video, index) => {
        return <Box key={index}>
          {video.id.videoId && <VideoCard  video={video} medum={medum} />}
          {video.id.channelId && <ChannelCard channelDetails={video} />}
        </Box>;
      })}
    </Stack>
  );
}

export default Videos;
