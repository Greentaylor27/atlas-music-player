import { useState } from "react";
import shuffle from "../assets/ShuffleIcon.svg";
import back from "../assets/BackIcon.svg";
import play from "../assets/PlayButton.svg";
import pause from "../assets/PauseButton.svg";
import skip from "../assets/SkipIcon.svg"

export default function PlayControls() {
    const [isPlaying, setIsPlaying] = useState(true);

    return(
        <div className="flex flex-row justify-between max-w-xl">
            <button className="cursor-pointer">
                <p className="flex items-center text-lg">1x</p>
            </button>
            <button className="cursor-pointer">
                <img src={back} alt="Back Button" />
            </button>
            <button className="cursor-pointer" onClick={() => setIsPlaying(prev => !prev)}>
                <img src={isPlaying ? pause : play} alt="Play/Pause Button" />
            </button>
            <button className="cursor-pointer">
                <img src={skip} alt="Skip Button" />
            </button>
            <button className="cursor-pointer">
                <img src={shuffle} alt="Shuffle Button" />
            </button>
        </div>
    )
}
