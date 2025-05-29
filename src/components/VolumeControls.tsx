import volumeIcon from "../assets/VolumeIcon.svg";
import React, { useState } from "react";

export default function VolumeControls() {
    const [volume, setVolume] = useState(0);

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(event.target.value));
    };

    return (
        <div className="flex items-center space-x-3">
            <img src={volumeIcon} alt="Volume Icon" className="w-5 h-5" />
            <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full max-w-full h-3 rounded-full border border-gray-500 bg-white accent-gray-500 cursor-pointer appearance-none"
            />
        </div>
    )
}
