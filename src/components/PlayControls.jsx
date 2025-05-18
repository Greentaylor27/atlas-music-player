import shuffle from "../assets/ShuffleIcon.svg";
import back from "../assets/BackIcon.svg";
import play from "../assets/PlayButton.svg";
import pause from "../assets/PauseButton.svg";
import skip from "../assets/SkipIcon.svg"

export default function PlayControls() {
    return(
        <div className="flex flex-row justify-between max-w-xl">
            <p>1x</p>
            <button>
                <img src={back} alt="Back Button" />
            </button>
            <button>
                <img src={play} alt="Play Button" />
            </button>
            <button>
                <img src={skip} alt="Skip Button" />
            </button>
            <button>
                <img src={shuffle} alt="Shuffle Button" />
            </button>
        </div>
    )
}
