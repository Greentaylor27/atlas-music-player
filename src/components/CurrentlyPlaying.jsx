import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import VolumeControls from "./VolumeControls";
import PlayControls from "./PlayControls";

export default function CurrentlyPlaying() {
  return (
    <div className="rounded-lg p-8 bg-fist1-300">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControls />
    </div>
    )
}
