import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

function Feed() {
  const [videos, setVideos] = useState([])
  const {searchTerm}=useParams()
  useEffect(() =>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>setVideos(data.items))

  },[searchTerm])
  return (
     <Box p={2} sx={{ height: { sx: "auto", md: "90vh",overflowY:'auto' ,flex:2 }
     }} >
     <Typography variant="h4" fontWeight='bold' sx={{color:'white'}} className="copyright" >
      Search For Result for: <span style={{color:'#F31503'}}>{searchTerm}</span>
      </Typography>
      <Videos medum={"300px"} videos={videos}/>
     </Box>
  );
}

export default Feed;
