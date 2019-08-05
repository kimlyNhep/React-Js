import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderVideo = videos.map(video => {
    return <VideoItem video={video} />;
  });
  return <div className="ui relaxed divided list">{renderVideo}</div>;
};

export default VideoList;
