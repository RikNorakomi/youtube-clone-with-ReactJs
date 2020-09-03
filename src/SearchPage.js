import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://picsum.photos/seed/picsum/200/300"
        channel="Clever Programmer"
        verified
        subs="695K"
        noOfVideos={382}
        description="This is the channel row description!"
      />

      <hr />

      <VideoRow
        views="1.4M views"
        subs="54K"
        description="This is the description for the VIdeo Row with some typos"
        image="https://picsum.photos/200/300?random=2"
        channel="Hoppa Channel!"
      />
    </div>
  );
}

export default SearchPage;
