import React from 'react';
import { Stack, Box } from "@mui/material";
import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({videos}) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
    {videos.map((osayame, idx) => (
      <Box key={idx}>
        {osayame.id.videoId && <VideoCard video={osayame} /> }
        {osayame.id.channelId && <ChannelCard channelDetail={osayame} />}
      </Box>
    ))}
  </Stack>
  )
}

export default Videos