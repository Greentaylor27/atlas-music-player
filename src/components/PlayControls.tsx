import shuffle from "../assets/ShuffleIcon.svg";
import back from "../assets/BackIcon.svg";
import play from "../assets/PlayButton.svg";
import pause from "../assets/PauseButton.svg";
import skip from "../assets/SkipIcon.svg";

type PlayControlsProps = {
    currentIndex: number;
    playlistLength: number;
    isShuffle: Boolean;
    onBack: () => void;
    onForward: () => void;
    onToggleShuffle: () => void;
    isPlaying: boolean;
    setIsPlaying: (value: boolean) => void;
    speedIndex: number;
    setSpeedIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function PlayControls({ currentIndex,
    playlistLength,
    isShuffle,
    onBack,
    onForward,
    onToggleShuffle,
    isPlaying,
    setIsPlaying,
    speedIndex,
    setSpeedIndex }: PlayControlsProps) {

        const speed = [0.5, 1, 2];

    const handleSpeedClick = () => {
        setSpeedIndex((prevIndex) => (prevIndex + 1) % speed.length);
    };


    const isBackDisabled = currentIndex === 0;
    const isForwardDisabled = currentIndex === playlistLength - 1 && !isShuffle;

    return(
        <div className="flex flex-row justify-between max-w-xl mt-4">
            <button className="cursor-pointer" onClick={handleSpeedClick}>
                <p className="flex items-center text-lg">{speed[speedIndex]}x</p>
            </button>

            <button className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" disabled={isBackDisabled} aria-disabled={isBackDisabled} onClick={onBack}>
                <img src={back} alt="Back Button" />
            </button>

            <button className="cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
                <img src={isPlaying ? pause : play} alt="Play/Pause Button" />
            </button>

            <button className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" disabled={isForwardDisabled} aria-disabled={isForwardDisabled} onClick={onForward}>
                <img src={skip} alt="Skip Button" />
            </button>

            <button className={`cursor-pointer ${isShuffle ? "opacity-100" : "opacity-50"}`} onClick={onToggleShuffle}>
                <img src={shuffle} alt="Shuffle Button" />
            </button>

        </div>
    )
}
