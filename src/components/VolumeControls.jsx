import volumeIcon from "../assets/VolumeIcon.svg";
import React, { useState } from "react";

export default function VolumeControls() {
    const [volume, setVolume] = useState(50); // Intial Volume

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    }
    
    return(
        <div>
            <img src={volumeIcon} alt="Volume Icon" />
            <input type="range" min="0" max="100" step="1" value={volume} onChange={handleVolumeChange} />
        </div>
    );
}
