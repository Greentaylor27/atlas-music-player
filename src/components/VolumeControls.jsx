import volumeIcon from "../assets/VolumeIcon.svg";
import React, { useState } from "react";

export default function VolumeControls() {
    const [volume, setVolume] = useState(0); // Intial Volume

    const handleVolumeChange = (event) => {
        setVolume(Number(event.target.value));
    }
    
    return(
        <div className="flex justify-between max-w-xl">
            <img src={volumeIcon} alt="Volume Icon" />
            <input type="range" min="0" max="100" step="1" value={volume} onChange={handleVolumeChange} />
        </div>
    );
}
