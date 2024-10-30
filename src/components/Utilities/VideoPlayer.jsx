"use client";

import Youtube from "react-youtube";
import { useState } from "react";

const VideoPlayer = ({ youtubeId }) => {
   const [isOpen, setIsOpen] = useState(true);

   const handleVideoPlayer = () => {
      setIsOpen((prevState) => !prevState);
   };

   const option = {
      width: "300",
      height: "250",
   };

   const Player = () => {
      return (
         <div className="fixed bottom-0 right-0 mr-2 mb-2 rounded-sm">
            <button
               onClick={handleVideoPlayer}
               className="text-color-primary float-right bg-color-secondary"
            >
               X
            </button>
            <Youtube
               videoId={youtubeId}
               onReady={(event) => event.target.pauseVideo()}
               opts={option}
               onError={() => alert("Video is broken, please try another")}
            />
         </div>
      );
   };

   const ButtonOpenTrailer = () => {
      return (
         <button
            onClick={handleVideoPlayer}
            className="fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl px-2 rounded"
         >
            Tonton Trailer
         </button>
      );
   };

   return isOpen ? <Player /> : <ButtonOpenTrailer />;
};

export default VideoPlayer;
