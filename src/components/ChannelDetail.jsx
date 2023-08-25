import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { Box } from "@mui/material";
function ChannelDetail() {
  const [channelDetails, setChannelDetails] = useState("");
  const [channelVideos, setChannelVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setChannelVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(171deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 21%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetails={channelDetails} marginTop="-93px" />
        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos medum="260px" videos={channelVideos} />
        </Box>
      </Box>
    </Box>
  );
}

export default ChannelDetail;
