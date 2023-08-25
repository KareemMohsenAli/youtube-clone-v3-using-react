import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

function ChannelCard({ channelDetails ,marginTop}) {
  return (
    <Box sx={{ boxShadow: "none", borderRadius: "20px" ,display: "flex",margin:'auto',
    justifyContent: "center",
    textAlign: "center",width:{xs:'356px',md:'260px'},height:'300px' }}>
      <Link className="text-decoration-none" to={`/channel/${channelDetails?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
            marginTop:marginTop
      
          }}
        >
          <CardMedia
            alt={channelDetails?.snippet?.title}
            image={
              channelDetails?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            sx={{borderRadius:'50%',height:'180px',width:'180px'}}
          />
          <Typography variant="h6">
            {channelDetails?.snippet?.title}
            <CheckCircle sx={{fontSize:14 , color:'gray' ,ml:'5px'}}/>
          </Typography>
          {channelDetails?.statistics?.subscriberCount&& 
         <Typography>
            {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()} Subscribers
         </Typography>
          }
        </CardContent>
      </Link>
    </Box>
  );
}

export default ChannelCard;
