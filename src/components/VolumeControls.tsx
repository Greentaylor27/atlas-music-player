import volumeIcon from "../assets/VolumeIcon.svg";

type VolumeControlsProps = {
    volume: number;
    onVolumeChange: (value: number) => void;
}

export default function VolumeControls({ volume, onVolumeChange }: VolumeControlsProps) {
    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onVolumeChange(Number(event.target.value));
    };

    return (
        <div className="flex items-center space-x-3">
            <img src={volumeIcon} alt="Volume Icon" className="w-5 h-5" />
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full max-w-full h-3 rounded-full border border-gray-500 bg-white accent-gray-500 cursor-pointer appearance-none"
            />
        </div>
    )
}
