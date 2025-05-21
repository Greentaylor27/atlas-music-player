import volumeIcon from "../assets/VolumeIcon.svg";
import slider from "../assets/Slider.svg";
import React, { useState } from "react";

export default function VolumeControls() {
    const [volume, setVolume] = useState(0);

    const handleVolumeChange = (event) => {
        setVolume(Number(event.target.value));
    };

  return (
    <div className="flex items-center w-full max-w-sm pt-2">
      <img src={volumeIcon} alt="Volume Icon" className="w-5 h-5" />
      <img
        src={slider}
        alt="Volume Slider"
        className="w-full h-3 object-contain -ml-10 rounded-full"
      />
    </div>
  )

    {/* return (
        <div className="flex items-center space-x-3 w-full max-w-sm">
            <img src={volumeIcon} alt="Volume Icon" className="w-5 h-5" />
            <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
        </div>
    ) */}
}
