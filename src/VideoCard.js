import React from "react";
import "./VideoCard.css";
import { Avatar } from "@material-ui/core";

function VideoCard({ title, views, channel, timestamp, image, channelImage }) {
  return (
    <div className="videoCard">
      <h4>video</h4>
      <img className="videoCard__thumb" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />

        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
