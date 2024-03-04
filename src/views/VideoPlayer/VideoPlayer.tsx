import React from "react";
import { FiX } from "react-icons/fi";
import "./VideoPlayer.css";
import videoThumbnail from "../../assets/images/video.png";

type VideoPlayerProps = {
  onClose: () => void;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ onClose }) => {
  return (
    <div className="video-player">
      <img
        src={videoThumbnail}
        alt="Video Thumbnail"
        className="video-thumbnail"
      />
      <div className="video-controls">
        <FiX className="control-icon close-icon" onClick={onClose} />
      </div>
    </div>
  );
};

export default VideoPlayer;
