import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState();
  // const [videos, setVideos] = useState(null);

  const { id } = useParams()
  console.log(channelDetail)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data.item));
  }, [id])


  return (
    <div>{id}</div>
  )
}

export default ChannelDetail