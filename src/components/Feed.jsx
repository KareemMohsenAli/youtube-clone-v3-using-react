import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromApi";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  useEffect(() =>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>setVideos(data.items))

  },[selectedCategory])
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" },borderRight:'1px solid #3d3d3d',px:{sx: 0, md:2}
     }}>

      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Typography variant="body2" className="copyright" sx={{mt:1.5,color:'#fff'}}>
        Copyright 2023 Kareem Media
      </Typography>
     </Box>
     <Box p={2} sx={{ height: { sx: "auto", md: "90vh",overflowY:'auto' ,flex:2 }
     }} >
     <Typography variant="h4" fontWeight='bold' sx={{color:'white'}} className="copyright" >
      {selectedCategory} <span style={{color:'#F31503'}}>Videos</span>
      </Typography>
      <Videos medum={"250px"} videos={videos}/>
     </Box>
 
    </Stack>
  );
}

export default Feed;
